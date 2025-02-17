import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import dishesData from "./data.js";
import "./App.css";
import { useState, useReducer } from "react";

const initialState = {
  cartItems: [],
  total: 0,
};

const reducerFunction = (state, action) => {
  if (action.type === "ADD") {
    console.log("Adding new item", action.payload);
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    console.log("Ex:", existingItemIndex);
    console.log(state.cartItems[existingItemIndex]);

    let updatedCartItems;
    if (existingItemIndex !== -1) {
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    }

    const newTotal = updatedCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      cartItems: updatedCartItems,
      total: newTotal,
    };
  }

  return state;
};

function App() {
  const [cartState, dispatch] = useReducer(reducerFunction, initialState);

  const addItemsToCart = (itemObj) => {
    dispatch({ type: "ADD", payload: itemObj });
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<Menu dishesData={dishesData} onAdd={addItemsToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
