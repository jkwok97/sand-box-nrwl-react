import { useState, useEffect } from 'react';
import styles from './app.module.css';
import MainHeader from '../components/MainHeader/MainHeader';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import AuthContext from '../store/auth-context';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn');

    if (isUserLoggedIn === '1') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
