import React from "react";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} width="200" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default Item;
