import MealsItemForm from '../Meals-Item-Form/MealsItemForm';
import classes from './MealsItem.module.css';

export interface MealsItemsProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealsItem = (props: MealsItemsProps) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealsItem;
