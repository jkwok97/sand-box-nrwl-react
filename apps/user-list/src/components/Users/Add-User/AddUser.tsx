import { useState } from 'react';
import Wrapper from '../../Helpers/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { ErrorModalProps } from '../../UI/ErrorModal/ErrorModal.props';
import styles from './AddUser.module.css';
import { AddUserProps } from './AddUser.props';

const AddUser = (props: AddUserProps) => {
  const [enteredUserName, setEnteredUserName] = useState<string>('');
  const [enteredUserAge, setEnteredUserAge] = useState<string>('');
  const [error, setError] = useState<ErrorModalProps>();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 &&
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUserName, +enteredUserAge);

    setEnteredUserAge('');
    setEnteredUserName('');
  };

  const userNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error?.title}
          message={error?.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          ></input>

          <label htmlFor="userAge">Age (years)</label>
          <input
            id="userAge"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredUserAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
