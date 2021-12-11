import { InputDto } from 'apps/food-order/src/models/Input.dto';
import React from 'react';
import classes from './Input.module.css';

export interface InputProps {
  label: string;
  input: InputDto;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
