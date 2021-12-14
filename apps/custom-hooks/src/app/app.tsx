import { Fragment } from 'react';
import BackwardCounter from '../components/BackwardCounter';
import ForwardCounter from '../components/ForwardCounter';
import styles from './app.module.css';


export function App() {
  return (
    <Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </Fragment>
  );
}

export default App;
