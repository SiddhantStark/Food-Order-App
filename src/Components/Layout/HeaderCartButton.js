// import React from "react";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import CartIcon from "../Cart/CartIcon";
// import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../store/cart-context";

// const HeaderCartButton = (props) => {
//   const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
//   const cartCtx = useContext(CartContext);

//   const {items} = cartCtx;

//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

//   useEffect(() => {
//     if(items.length > 0){      
//         return;
//     }
//     setButtonIsHighlighted(true);

//     const timer = setTimeout(() => {
//        setButtonIsHighlighted(false);
//     },300)

//     return () => {
//        clearTimeout(timer);
//     }

//   },[items]);

//   return (
//     <button className={btnClasses} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>{numberOfCartItems}</span>
//     </button>
//   );
// };

// export default HeaderCartButton;
import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;