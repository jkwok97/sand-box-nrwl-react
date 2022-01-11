// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartItemDto } from 'apps/shopping-cart/src/models';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartStateActions } from 'apps/shopping-cart/src/store/cart-state/cart-state.actions';
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartItemProps {
  item: CartItemDto;
}

const CartItem = (props: CartItemProps) => {
  const { name, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();

  const removeItemFromCartHandler = () => {
    dispatch(CartStateActions.removeItemToCart(props.item.id));
  };

  const addItemToCartHandler = () => {
    dispatch(CartStateActions.addItemToCart(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
