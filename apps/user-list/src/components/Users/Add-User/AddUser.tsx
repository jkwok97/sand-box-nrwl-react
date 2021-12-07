import { useState, useRef, RefObject } from 'react';
import Wrapper from '../../Helpers/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { ErrorModalProps } from '../../UI/ErrorModal/ErrorModal.props';
import styles from './AddUser.module.css';
import { AddUserProps } from './AddUser.props';

const AddUser = (props: AddUserProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<ErrorModalProps>();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    let enteredName: string = '';
    let enteredAge: number = 0;

    if (nameInputRef?.current) {
      enteredName = nameInputRef.current.value;
    }

    if (ageInputRef?.current) {
      enteredAge = +ageInputRef.current.value;
    }

    if (
      enteredName.trim().length === 0 &&
      enteredAge.toString().trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    if (nameInputRef?.current) {
      nameInputRef.current.value = '';
    }

    if (ageInputRef?.current) {
      ageInputRef.current.value = '';
    }
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
          <input id="username" type="text" ref={nameInputRef}></input>

          <label htmlFor="userAge">Age (years)</label>
          <input id="userAge" type="number" ref={ageInputRef}></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
