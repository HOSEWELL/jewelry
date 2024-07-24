import React, { useState, useEffect } from "react";
import ProductCard from "./index.jsx";
import CartModal from "./cart.jsx";
import "./index.css";

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    useEffect(() => {
        // Simulating fetching products from a JSON file
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
        setIsCartVisible(true); // Show cart modal
        console.log("Product added to cart:", product);
    };

    const closeCart = () => {
        setIsCartVisible(false); // Hide cart modal
    };
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index)); // Remove product from cart
    };

    return (
        <>
            {isCartVisible && <CartModal cart={cart} closeCart={closeCart} removeFromCart={removeFromCart} />}

            <div className="product-container">
                <h1 className="product-heading">Products</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search product..."
                        style={{borderRadius:"10px", padding:"10px"}}
                        onChange={(e) => {
                            const searchTerm = e.target.value;
                            const filteredProducts = products.filter((product) =>
                                product.title.toLowerCase().includes(searchTerm.toLowerCase())
                            );
                            setProducts(filteredProducts);
                        }}
                    />
                </div>
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




