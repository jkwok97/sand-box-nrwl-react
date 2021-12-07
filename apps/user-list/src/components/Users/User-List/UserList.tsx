import { AddUserDto } from 'apps/user-list/src/models';
import Card from '../../UI/Card/Card';
import { UserListProps } from './UserList.props';
import styles from './UserList.module.css';

const UserList = (props: UserListProps) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user: AddUserDto) => (
          <li key={user.id}>
            {user.userName} ({user.userAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
