import { EnhancedStore } from '@reduxjs/toolkit';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Auth from '../components/Auth';
import Counter from '../components/Counter';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import styles from './app.module.css';

export function App() {
  const appState = useSelector((state: any) => state.auth);

  const isAuthenticated = appState.isLoggedIn;

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
