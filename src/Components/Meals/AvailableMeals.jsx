import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect } from "react";
import { useState } from "react";


const AvailableMeals = () => {
const [isLoding, setIsLoading]=useState(true)
  const[meals, setMeals]=useState([])
 useEffect(()=>{
  const fetchMeals= async ()=>{
 const response= await   fetch('https://react-app-8c54a-default-rtdb.firebaseio.com/meals.json');
 const responseData= await response.json();
 const loadedMeals= [];
 for (const key in responseData){
  loadedMeals.push({
    id:key,
    name: responseData[key].name,
    description: responseData[key].description,
    price: responseData[key].price,

  })
 }
 setMeals(loadedMeals)
 setIsLoading(false)
  }

  fetchMeals();
  
 },[])
if(isLoding){
  return <section className={classes.loading}>
    <h1>Loading...</h1>
  </section>
}
  const mealsList =meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
