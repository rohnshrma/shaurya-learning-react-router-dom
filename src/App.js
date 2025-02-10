import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import dishesData from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    cartItems: [],
    total: 0,
  });

  const addItemsToCart = (itemObj) => {
    console.log("Item Object:", itemObj); // Log the incoming item object

    setCart((prevCart) => {
      // Create a new item with default values
      const newItem = {
        ...itemObj,
        id: itemObj.id, // Ensure the item has an `id`
        price: Number(itemObj.price) || 0,
        quantity: itemObj.quantity ? Number(itemObj.quantity) : 1,
      };

      console.log("New Item:", newItem); // Log the new item

      // Check if the item already exists in the cart
      const existingItem = prevCart.cartItems.find(
        (item) => item.id === newItem.id
      );

      console.log("Existing Item:", existingItem); // Log the existing item

      let updatedCartItems;
      if (existingItem) {
        // If the item exists, update its quantity
        updatedCartItems = prevCart.cartItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // If the item does not exist, add it to the cart
        updatedCartItems = [...prevCart.cartItems, newItem];
      }

      console.log("Updated Cart Items:", updatedCartItems); // Log the updated cart items

      // Calculate the new total
      const newTotal = updatedCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      console.log("New Total:", newTotal); // Log the new total

      // Return the updated cart state
      return {
        cartItems: updatedCartItems,
        total: newTotal,
      };
    });
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
