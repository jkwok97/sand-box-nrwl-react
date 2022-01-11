import { useDispatch, useSelector } from 'react-redux';
import { UiStateActions } from '../../../store/ui-state';
import classes from './CartButton.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartButtonProps {}

const CartButton = (props: CartButtonProps) => {
  const dispatch = useDispatch();

  const qty = useSelector((state: any) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(UiStateActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  );
};

export default CartButton;
