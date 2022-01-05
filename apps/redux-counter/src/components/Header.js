import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authStateActions } from '../store/auth-state';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const appState = useSelector((state) => state.auth);

  const isAuthenticated = appState.isLoggedIn;

  const logoutHandler = () => {
    dispatch(authStateActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
