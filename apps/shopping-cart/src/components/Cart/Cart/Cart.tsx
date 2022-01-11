import Card from '../../UI/Card';
import classes from './Cart.module.css';
import CartItem from '../Cart-Item/CartItem';
import { useSelector } from 'react-redux';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartItemDto } from 'apps/shopping-cart/src/models';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartProps {}

const Cart = (props: CartProps) => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem: CartItemDto) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
