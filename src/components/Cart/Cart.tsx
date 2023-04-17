import { ICartState } from '../../interface/ICartState';
import './Cart.css';
import { useState } from 'react';

function Cart(props:ICartState){ 
    const [isOpen, setIsOpen] = useState(false)
    const total = props.cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toogle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            {props.cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {props.cart.map(({name, price,amount}, index) =>(
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total: {total}€</h3>
                    <button onClick={() => props.updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div> Votre panier est vide </div>
            )}
        </div> ) :(
            <div className='lmj-cart-closed'>
                <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
            </div>
        )
}

export default Cart