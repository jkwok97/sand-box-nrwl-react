const MealService = {
  fetchMeals: async () => {
    const response = await fetch(
      'https://react-http-f028d-default-rtdb.firebaseio.com/meals.json'
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();

    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    return loadedMeals;
  },
};

export default MealService;
