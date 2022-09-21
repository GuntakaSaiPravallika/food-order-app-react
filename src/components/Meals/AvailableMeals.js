import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const STATIC_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Hyderabad Special Biryani",
    price: 250,
  },
  {
    id: "m2",
    name: "Chicken Lollipop",
    description: "Spicy Chicken Starter",
    price: 200,
  },
  {
    id: "m3",
    name: "Chicken Shawarma",
    description: "Tasty Roll with juicy Chicken",
    price: 120,
  },
  {
    id: "m4",
    name: "Chicken Burger",
    description: "American, raw, meaty",
    price: 150,
  },
  {
    id: "m5",
    name: "Vegetable Salad",
    description: "Healthy...and green...",
    price: 100,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {STATIC_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
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

export default AvailableMeals;
