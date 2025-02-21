import React from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart, onRemove, onUpdate }) => {
  const navigate = useNavigate();

  return (
    <div className="cart wrapper">
      {cart.cartItems.length > 0 ? (
        cart.cartItems.map((itemObj) => (
          <CartItem
            item={itemObj}
            onRemove={onRemove}
            key={itemObj.id}
            id={itemObj.id}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <h2 className="text-center">No Items In the Cart</h2>
      )}
      {cart.cartItems.length > 0 && (
        <div className="cart_total py-3">
          <div className="row justiy-content-between align-items-center">
            <div className="col-3 col-md-2"></div>
            <div className="col text-start">
              <h2>Total :</h2>
            </div>
            <div className="col text-center">
              <h3>₹ {cart.total}</h3>
            </div>
            <div className="col text-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("enter_details");
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
