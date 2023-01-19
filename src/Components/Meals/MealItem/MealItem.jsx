import React from 'react'
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
  const cartCtx= useContext(CartContext);
  const addToCartHandler= amount=>{
   cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
   })
  }
const price= `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <h3 className={classes.price}>{price}</h3>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem