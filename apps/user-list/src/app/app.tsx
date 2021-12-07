import styles from './app.module.css';
import AddUser from '../components/Users/Add-User/AddUser';
import UserList from '../components/Users/User-List/UserList';
import { useState, Fragment } from 'react';
import { AddUserDto } from '../models';

export function App() {
  const [usersList, setUsersList]: [
    AddUserDto[],
    React.Dispatch<React.SetStateAction<AddUserDto[]>>
  ] = useState<AddUserDto[]>([]);

  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUserList: AddUserDto[]) => {
      return [
        ...prevUserList,
        { userName: uName, userAge: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />

      {usersList.length > 0 && <UserList users={usersList} />}
    </Fragment>
  );
}

export default App;
