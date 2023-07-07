import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import img from '../../assets/img/PayPal 1.svg'

const Cart = () => {
    const [btn, setBtn] = useState(false)
    const [btn1, setBtn1] = useState(false)
    const changeBtn=()=>{
        if(!btn){
            setBtn1(!btn1)
        }else if(!btn1){
            setBtn(!btn)
        }

    }
    return (
        <div id='myCart'>
            <div className="container">
                <div className="myCart">
                    <div className="yourCart">
                        <div className="zagalovok">
                            <h1>Your cart</h1>
                            <p>Not ready to checkout? <span style={{color: 'blue'}}>
                                    <NavLink to={'/'}>Continue Shopping</NavLink>
                                </span></p>
                        </div>
                        <div className="myCart--basket">
                        </div>

                    </div>




                    <div className="cart_content">
                        <h1>Order Summary</h1>
                        <div className="order">
                            <div className="shipping">
                                <h5>Shipping</h5>




                                <h5 onClick={() => {
                                    setBtn(!btn)
                                    changeBtn()
                                }}
                                >Select Method <IoIosArrowForward/></h5>
                            </div>


                            <div style={{
                                display: btn ? 'block' : 'none'
                            }}>
                                <div className='select_block'>
                                    <input type="checkbox"/>
                                    <div>
                                        <h4>UPS Ground Shipping </h4>
                                        <p>3-5 Business Days</p>
                                    </div>

                                </div>
                                <div className='select_block2'>
                                    <input type="checkbox"/>
                                    <div>
                                        <h4>UPS/USPS Surepost </h4>
                                        <p>4-7 Business Days</p>
                                    </div>
                                </div>


                            </div>



                            <div className="Payment">
                                <h5>Payment</h5>










                                <h5 onClick={()=> {
                                    setBtn1(!btn1)
                                    changeBtn()
                                }}
                                >Select Method <IoIosArrowForward/></h5>
                            </div>



                            <div style={{display:btn1? 'block' : 'none'}} className='payment_block'>
                                <div className='pay-btn'>
                                    <button className='btn-1'>
                                        <img src={img} alt=""/>
                                    </button>
                                    <button className='btn-2'>Credit Card</button>
                                </div>
                                <input type="text" placeholder='Cardholder Name'/>

                                <input type="text" placeholder='Card Number'/>

                                <div className='register-block'>
                                    <input type="text" placeholder='Month' className='month'/>
                                    <input type="text" placeholder='Year'/>
                                </div>

                                <input type="text" placeholder='CVC'/>

                            </div>


                            <div className="total">
                                <h5>Total</h5>
                                <p>$</p>

                            </div>
                        </div>
                        <button className='btn3'>Continue to checkout</button>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Cart;