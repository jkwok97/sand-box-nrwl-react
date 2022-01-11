// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartStateActions } from 'apps/shopping-cart/src/store/cart-state/cart-state.actions';
import { useDispatch } from 'react-redux';
import Card from '../../UI/Card';
import classes from './ProductItem.module.css';

interface ProductItemProps {
  key: string;
  title: string;
  price: number;
  description: string;
  id: string;
}

const ProductItem = (props: ProductItemProps) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      CartStateActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
