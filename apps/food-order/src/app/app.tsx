import { Fragment } from 'react';

import Header from '../components/Layout/Header/Header';
import Cart from '../containers/Cart/Cart/Cart';
import Meals from '../containers/Meals/Meals/Meals';

import styles from './app.module.css';

export function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
