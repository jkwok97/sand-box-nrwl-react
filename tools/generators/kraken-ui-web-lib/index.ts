import {
  Tree,
  formatFiles,
  installPackagesTask
} from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator, NormalizedSchema } from '@nrwl/react/src/generators/library/library';

import createReactComponent from '../react-component';

interface Schema {
  name: string;
}

export default async function createKrakenUIWebLib(
  tree: Tree,
  options: Schema
) {
  const reactComponentOptions = {
    name: options.name,
    project: null,
    directory: `Kraken-UI-Web/${options.name}/src/lib/components/`,
  };

  const reactLibSchema: NormalizedSchema = {
    name: options.name,
    directory: 'kraken-ui-web',
    fileName: options.name,
    projectDirectory: '',
    tags: 'kraken-ui-web',
    buildable: true,
    importPath: `@kraken-ui-web/${options.name}`,
    projectRoot: '',
    routePath: '',
    parsedTags: [],
    style: 'css',
    skipTsConfig: false,
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    component: false,
    strict: true,
    pascalCaseFiles: true,
  }

  await libraryGenerator(tree, reactLibSchema);
  await createReactComponent(tree, reactComponentOptions);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
