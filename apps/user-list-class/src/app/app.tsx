import UserFinder from '../components/UserFinder';
import UsersContext from '../store/UsersContext';

import styles from './app.module.css';

const DUMMY_USERS: UsersDto[] = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

export interface UsersDto {
  id: string;
  name: string;
}

export function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
