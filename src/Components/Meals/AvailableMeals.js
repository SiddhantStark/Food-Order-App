import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Chole Bature',
//       description: 'Spicy Chole with delicious Bature',
//       price: 150.00,
//     },
//     {
//       id: 'm2',
//       name: 'Paneer Tikka',
//       description: 'Too delicious',
//       price: 200.00,
//     },
//     {
//       id: 'm3',
//       name: 'Zinger Burger',
//       description: 'Crispy and tasty',
//       price: 179.99,
//     },
//     {
//       id: 'm4',
//       name: 'Vegetable Sandwich',
//       description: 'Healthy...and tasty...',
//       price: 60.00,
//     },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        "https://react-http-b38c1-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
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
      setIsLoading(false);
      setMeals(loadedMeals);
    };

    fetchMeal().then().catch((error) => {
       setIsLoading(false);
       setHttpError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

if(httpError){
  return <section className={classes.MealsError}>
     <h1>{httpError}</h1>
  </section>
}

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
