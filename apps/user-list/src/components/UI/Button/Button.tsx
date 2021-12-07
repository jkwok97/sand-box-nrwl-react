import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button = (props: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
