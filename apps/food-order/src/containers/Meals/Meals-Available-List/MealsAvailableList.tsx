import classes from './MealsAvailableList.module.css';
import { DUMMY_MEALS, Meal } from 'apps/food-order/src/dummy-meals';

const MealsAvailableList = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal: Meal) => (
          <li>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default MealsAvailableList;
