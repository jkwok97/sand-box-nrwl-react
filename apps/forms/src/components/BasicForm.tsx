import { FormEvent } from 'react';
import useInput from '../hooks/use-input';
import { BasicFormPropsDto } from '../models';

const isNotEmpty = (value: string) => value.trim() !== '';

const BasicForm = (props: BasicFormPropsDto) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    error: firstNameIsInvalid,
    fieldValueChangeHandler: firstNameChangeHandler,
    fieldInputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    error: lastNameIsInvalid,
    fieldValueChangeHandler: lastNameChangeHandler,
    fieldInputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailIsInvalid,
    fieldValueChangeHandler: emailChangeHandler,
    fieldInputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim().includes('@'));

  let formIsValid = false;

  firstNameIsValid && lastNameIsValid && emailIsValid
    ? (formIsValid = true)
    : (formIsValid = false);

  const formSubmissionHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetForm();
  };

  const resetForm = () => {
    resetFirstNameHandler();
    resetLastNameHandler();
    resetEmailHandler();
  };

  const firstNameInputClasses = firstNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First Name Must Not Be Empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last Name Must Not Be Empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailIsInvalid && <p className="error-text">Email Is Not Valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
