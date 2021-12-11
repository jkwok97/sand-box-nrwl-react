import CartContext from 'apps/food-order/src/store/contexts/CartContext';
import { useContext } from 'react';
import MealsItemForm from '../Meals-Item-Form/MealsItemForm';
import classes from './MealsItem.module.css';

export interface MealsItemsProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealsItem = (props: MealsItemsProps) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount: number) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddToCard={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
