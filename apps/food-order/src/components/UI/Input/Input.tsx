import { InputDto } from 'apps/food-order/src/models/Input.dto';
import classes from './Input.module.css';

export interface InputProps {
  label: string;
  input: InputDto;
}

const Input = (props: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
};

export default Input;
