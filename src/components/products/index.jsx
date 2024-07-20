import React, { useState } from "react";


const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call addToCart function passed from parent component
  };

  return (
    <>
    
    <div className="card">
      <img className="card-img-top" src={product.picture} alt="card img cap" />
      <div>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <button type="button" className="btn btn-primary" onClick={handleAddToCart}> Add to cart </button>
      </div>
    </div>

    </>
    
  );
};

export default ProductCard;

