import React from 'react';
import { UsersDto } from '../app/app';

interface UsersContextInterface {
  users: UsersDto[];
}

const UsersContext = React.createContext<UsersContextInterface>({
  users: [],
});

export default UsersContext;
