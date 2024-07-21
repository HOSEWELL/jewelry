import React, { useState, useEffect } from "react";
import ProductCard from "./index";
import "./index.css";
import { Link } from "react-router-dom";



const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        // Simulating fetching products from a JSON file
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
        console.log("Product added to cart:", product);
        window.onload = function(){
            document.getElementById('close').onclick = function(){
                this.parentNode.parentNode.remove();
                return false;
            };
        };
    };

    return (
        <>
        
            {/* Cart Display */}
            <div className="cart">
                <h2 className="cart-heading">Cart</h2>
                <Link to="/app" state={{ cart: cart }} id="close" style={{borderRadius:"10px", backgroundColor:"blue", color:"white",textDecoration:"none",justifyContent:"center",marginLeft:"290px"   }}>close</Link>
                
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            

                            <img src={item.picture} alt={item.name} />
                            <span className="cart-item-price">{item.price}</span>
                            <br />
                            <button style={{borderRadius:"20px", backgroundColor:"blue", color:"white"}} className="cart-item-remove info" onClick={() => 
                                setCart(cart.filter((_, i) => i !== index))}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="product-container">
                
                <h1 className="product-heading">Products</h1>
                <div className="products">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>

        </>
  );
};

export default ProductContainer;


