import React, { useState } from "react";
import "./index.css";
const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call addToCart function passed from parent component
  };

  return (
    <>
    
    <div className="card">
      <img className="card-img-top" src={product.picture} alt="card img cap" />
      <div>
        <h3 style={{color:"red", fontWeight:"bold", }}>{product.title}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <button type="button" className="btn btn-primary" onClick={handleAddToCart} id="close"> Add to cart </button>
      </div>
    </div>

    </>
    
  );
};

export default ProductCard;

