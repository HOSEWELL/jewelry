import React, { useState, useEffect } from "react";
import ProductCard from "./index";
import "./index.css";
import { Link } from "react-router-dom";


const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Simulating fetching products from an API
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
        console.log("Product added to cart:", product);
    };

    return (
        <>
        
            {/* Cart Display */}
            <div className="cart">
                <h2 className="cart-heading">Cart</h2>
                <Link to="/app" state={cart}><button className="btn">close</button></Link>
                
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.picture} alt={item.name} />
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">{item.price}</span>
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


