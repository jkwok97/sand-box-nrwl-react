import classes from './MealsAvailableList.module.css';
import { DUMMY_MEALS, Meal } from 'apps/food-order/src/dummy-meals';
import Card from 'apps/food-order/src/components/UI/Card/Card';
import MealsItem from '../Meals-Item/MealsItem';

const MealsAvailableList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal: Meal) => (
            <MealsItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsAvailableList;
