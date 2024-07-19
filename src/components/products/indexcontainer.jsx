import React, {useEffect, useState} from "react";
import ProductCard from "./index";
import "./index.css"

const ProductContainer = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return(
        <>
        <h1 className="product-heading">Products</h1>

        <div className="products">
            {
                products.map(product => <ProductCard key={product.id} product={product}>
        
                </ProductCard>)
            }
            </div>
        </>
    )
}

export default ProductContainer;