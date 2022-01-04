import classes from './MealsAvailableList.module.css';
import { Meal } from 'apps/food-order/src/dummy-meals';
import Card from 'apps/food-order/src/components/UI/Card/Card';
import MealsItem from '../Meals-Item/MealsItem';
import { useEffect, useState } from 'react';
import MealService from 'apps/food-order/src/services/MealService';

const MealsAvailableList = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const loadedMeals = await MealService.fetchMeals();

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error: any) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals_loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes.meals_error}>
        <p>{hasError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal: Meal) => (
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
