import { Fragment } from 'react';

import Header from '../components/Layout/Header/Header';
import Meals from '../containers/Meals/Meals/Meals';

import styles from './app.module.css';

export function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
