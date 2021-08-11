import React from 'react'
import { useState } from 'react';
import '../styles/Cart.css';


const Cart = () => {

    const monsteraPrice = 8;
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(true);


    return isOpen ? (
        <div className='lmj-cart'>
            <button OnClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€

                <button onClick={() => updateCart(cart + 1)}>Ajouter !</button>

            </div>
            <h3>Total : {monsteraPrice * cart} €</h3>
        </div>
    ) : (
        <button OnClick={() => setIsOpen(true)} > Ouvrir le panier</ button>
    )
}
export default Cart;
