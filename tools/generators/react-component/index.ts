import {
  applyChangesToString,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { addImport } from '@nrwl/react/src/utils/ast-utils';
import ts = require('typescript');

interface Schema {
  name: string;
  project: string;
  directory: string;
}

export default async function createReactComponent(
  tree: Tree,
  options: Schema
) {
  const sourceRoot = getSourceRoot(tree, options);
  const name = names(options.name);
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    path.join(`${sourceRoot}/${options.directory}`, name.className),
    name
  );

  addExportsToBarrel(tree, options);

  await formatFiles(tree);
}

function getSourceRoot(tree: Tree, options: Schema) {
  let sourceRoot;

  if (options.project) {
    sourceRoot = readProjectConfiguration(tree, options.project).sourceRoot;
  } else {
    sourceRoot = 'libs';
  }

  if (!sourceRoot) {
    throw new Error('Project source root not found');
  }
  return sourceRoot;
}

function addExportsToBarrel(tree: Tree, options: Schema) {
  const sourceRoot = getSourceRoot(tree, options);
  const name = names(options.name);
  const indexFilePath = joinPathFragments(`${sourceRoot}/lib`, 'index.ts');
  const buffer = tree.read(indexFilePath);
  if (!!buffer) {
    const indexSource = buffer.toString('utf-8');
    const indexSourceFile = ts.createSourceFile(
      indexFilePath,
      indexSource,
      ts.ScriptTarget.Latest,
      true
    );
    const changes = applyChangesToString(
      indexSource,
      addImport(indexSourceFile, `export * from './${name.propertyName}';`)
    );
    tree.write(indexFilePath, changes);
  }
}
