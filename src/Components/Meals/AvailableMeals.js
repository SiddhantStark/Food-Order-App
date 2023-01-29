import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chole Bature',
      description: 'Spicy Chole with delicious Bature',
      price: 150.00,
    },
    {
      id: 'm2',
      name: 'Paneer Tikka',
      description: 'Too delicious',
      price: 200.00,
    },
    {
      id: 'm3',
      name: 'Zinger Burger',
      description: 'Crispy and tasty',
      price: 179.99,
    },
    {
      id: 'm4',
      name: 'Vegetable Sandwich',
      description: 'Healthy...and green...',
      price: 60.00,
    },
];

const AvailableMeals = () => {
    
    const mealsList = DUMMY_MEALS.map(meal => <MealItem
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />)

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
               {mealsList}
            </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;