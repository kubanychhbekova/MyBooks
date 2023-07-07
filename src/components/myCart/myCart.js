import React from 'react';
import {NavLink} from "react-router-dom";

const Cart = () => {
    return (
        <div id='myCart'>
            <div className="container">
                <div className="myCart">
                    <div className="myCart--yourCart">
                        <div className="myCart--yourCart__zagalovok">
                            <h1>Your cart</h1>
                            <p>Not ready to checkout? <span>
                                    <NavLink to={'/'}>Continue Shopping</NavLink>
                                </span></p>
                        </div>
                        <div className="myCart--basket">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;