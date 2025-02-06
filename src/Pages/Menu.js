import React from "react";
import Dish from "../components/Dish";

const Menu = ({ dishesData }) => {
  return (
    <div className="menu container">
      <h1>Our Menu</h1>
      <div className="row menu-items justify-content-evenly align-items-center">
        {dishesData.map((dishObj) => (
          <Dish dishObj={dishObj} key={dishObj.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
