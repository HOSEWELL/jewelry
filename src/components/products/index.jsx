import React from "react";
import './index.css'
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

  return (
    <>
      
        <div className="card" >
          <img className="card-img-top" src={product.picture}  alt="card img cap" />
          <div >
            <h5 >{product.price}</h5>
            <p >{product.description} </p>
        
          </div>
          <button type="button" className="btn btn-primary" style={{boxShadow:" 0 0px 0px 0 rgba(0,0,0,0.2), 0 0px 0px 0 rgba(0,0,0,0.2)"}} 
            onClick={() => {
              let cart = JSON.parse(localStorage.getItem('cart')) || [];
              const productExist = cart.find(item => item.id === product.id);
              if (productExist) {
                cart = cart.filter(item => item.id !== product.id);
              } else {
                cart.push({...product, quantity: 1});
              }
              localStorage.setItem('cart', JSON.stringify(cart));
            }}
          >
            {JSON.parse(localStorage.getItem('cart'))?.find(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'}
          </button>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping mt-2 me-2" style={{fontSize:"20px", color:"#000", position:"relative"}}>
              {JSON.parse(localStorage.getItem('cart'))?.filter(item => item.id === product.id).length}
            </i>
          </Link>
        </div>
     
         
    </>
  )
}
export default ProductCard;