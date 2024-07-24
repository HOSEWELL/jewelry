// CartModal.js
import React from 'react';
import './index.css';

const CartModal = ({ cart, closeCart, removeFromCart }) => {
    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <button onClick={closeCart} className="close-button"><i style={{color:"black"}} class="fa-solid fa-x"></i></button>
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div><img src={item.picture} alt={item.name} /></div>
                                <div>
                                    <span className="cart-item-price">{item.price}</span>
                                    <br />
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="remove-button"
                                    >Remove
                                    </button>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartModal;

