import { Fragment } from 'react';
import MealsAvailableList from '../Meals-Available-List/MealsAvailableList';
import MealsSummary from '../Meals-Summary/MealsSummary';
import classes from './Meals.module.css';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvailableList />
    </Fragment>
  );
};

export default Meals;
