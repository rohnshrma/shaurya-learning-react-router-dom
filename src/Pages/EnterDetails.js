import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const inititalState = {
  name: "",
  email: "",
  phone: "",
};
const reducerFunction = (state, action) => {
  return { ...state, [action.type]: action.payload };
};

const EnterDetails = () => {
  const [state, dispatch] = useReducer(reducerFunction, inititalState);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(state));
    navigate("/payment");
  };

  return (
    <div className="wrapper enter_details">
      <h2>Enter your details</h2>

      <form onSubmit={submitHandler}>
        <input
          className="form-control mb-2"
          type="text"
          name="name"
          value={state.name}
          onChange={changeHandler}
          placeholder="Enter your name..."
        />
        <input
          className="form-control mb-2"
          type="text"
          name="email"
          value={state.email}
          onChange={changeHandler}
          placeholder="Enter your email..."
        />
        <input
          className="form-control mb-2"
          type="text"
          name="phone"
          value={state.phone}
          onChange={changeHandler}
          placeholder="Enter your phone..."
        />
        <button className="btn btn-block btn-primary">Proceed To Pay</button>
      </form>
    </div>
  );
};

export default EnterDetails;
