import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/Cart.css';


const Cart = ({ cart, updateCart }) => {

    const monsteraPrice = 8;

    const [isOpen, setIsOpen] = useState(true);


    return isOpen ? (
        <div className='lmj-cart'>
            <button OnClick={() => setIsOpen(false)}>Fermer</button>

            <h2>Panier</h2>

            <h3>Total : {monsteraPrice * cart} €</h3>

            <button onClick={() => updateCart(0)}>Vider le panier !</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )

}
export default Cart;
