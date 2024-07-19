import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const ProductProfile = () => {
    const location = useLocation()
    const product = location.state;
    console.log(location.state);

    return (
        <>
           <Navbar/>
           <div className="card" >
          <img className="card-img-top" src={product.picture}  alt="card img cap" />
          <div >
            <h5 >{product.price}</h5>
            <p >{product.description} </p>
        
          </div>
<input type="text" onChange={(e) => searchProducts(e.target.value)} placeholder="Search products..." />
        </div>
 

        </>
    )
}
export default ProductProfile;