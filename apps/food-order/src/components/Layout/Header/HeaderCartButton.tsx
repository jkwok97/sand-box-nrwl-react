import CartIcon from '../../UI/Icons/CartIcon';
import classes from './HeaderCartButton.module.css';

export interface HeaderCartButtonProps {}

const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
