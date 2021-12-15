import { FormEvent, useRef } from 'react';
import useInput from '../hooks/use-input';

import { SimpleInputPropsDto } from '../models';

const SimpleInput = (props: SimpleInputPropsDto) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    error: nameIsInvalid,
    fieldValueChangeHandler: nameChangeHandler,
    fieldInputBlurHandler: nameBlurHandler,
    reset: resetHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailIsInvalid,
    fieldValueChangeHandler: emailChangeHandler,
    fieldInputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.trim().includes('@'));

  const nameInputRef = useRef<HTMLInputElement>(null);
  // const [formIsValid, setFormIsValid] = useState(false);

  let formIsValid = false;

  nameIsValid && emailIsValid ? (formIsValid = true) : (formIsValid = false);

  // useEffect(() => {
  //   nameIsValid ? setFormIsValid(true) : setFormIsValid(false);
  // }, [nameIsValid]);

  const formSubmissionHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredValue = nameInputRef.current?.value;
    console.log(enteredValue);

    if (nameIsInvalid || emailIsInvalid) {
      return;
    }

    // SEND FORM VALUES TO API

    resetForm();
  };

  const resetForm = () => {
    resetHandler();
    resetEmailHandler();
  };

  const nameInputClasses = nameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameIsInvalid && <p className="error-text">Name Must Not Be Empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
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

export default SimpleInput;
