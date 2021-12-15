import React, { ChangeEvent, FocusEvent, useReducer, useState } from 'react';

interface InitialState {
  value: string;
  isTouched: boolean;
}

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case 'INPUT': {
      return {
        isTouched: state.isTouched,
        value: action.value,
      };
    }
    case 'BLUR': {
      return {
        isTouched: true,
        value: state.value,
      };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return initialState;
  }
};

const useInput = (validateField: (value: any) => boolean) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const fieldIsValid = validateField(inputState.value);
  const fieldIsInvalid = !fieldIsValid && inputState.isTouched;

  // const [fieldValue, setFieldValue] = useState('');
  // const [fieldIsTouched, setFieldIsTouched] = useState(false);

  // const fieldIsValid = validateField(fieldValue);
  // const fieldIsInvalid = !fieldIsValid && fieldIsTouched;

  const fieldValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: event.target.value });
    // setFieldValue(event.target.value);
  };

  const fieldInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    dispatch({ type: 'BLUR' });
    // setFieldIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    // setFieldValue('');
    // setFieldIsTouched(false);
  };

  return {
    value: inputState.value,
    error: fieldIsInvalid,
    isValid: fieldIsValid,
    fieldValueChangeHandler,
    fieldInputBlurHandler,
    reset,
  };
};

export default useInput;
