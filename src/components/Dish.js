import React from "react";

const Dish = ({ dishObj, onAdd }) => {
  const addToCartHandler = () => {
    onAdd({
      name: dishObj.name,
      imageUrl: dishObj.imageUrl,
      description: dishObj.description,
      price: dishObj.price,
      id: dishObj.id,
    });
  };

  return (
    <div className="col-lg-3 mb-5">
      <div className="card dish-box">
        <img
          src={dishObj.imageUrl}
          alt={dishObj.name}
          style={{ height: "200px", objectFit: "cover" }}
          className="card-img-top"
        />
        <div className="card-body">
          <div className="row dish-info justify-content-between mb-3">
            <div className="col-8">
              <h5 className="card-title text-start">{dishObj.name}</h5>
            </div>
            <div className="col-4">
              <p className="card-text text-end dish-price">{dishObj.price}</p>
            </div>
            <p className="card-text text-start">{dishObj.description}</p>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={addToCartHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
