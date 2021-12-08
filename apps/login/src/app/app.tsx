import { Fragment, useContext } from 'react';
import styles from './app.module.css';
import MainHeader from '../components/MainHeader/MainHeader';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import AuthContext from '../store/auth-context';

export function App() {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
