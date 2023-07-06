import React from 'react';
import {FiInstagram} from "react-icons/fi";
import {PiTelegramLogoDuotone} from "react-icons/pi";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

const Footer = () => {
    return (

            <div id="footer">
                <div className='container'>
                    <div className='footer'>
                        <div className='footer--block'>
                            <h1>Sign up for our newsletter</h1>
                            <p>Be the first to know about our special offers, news, and updates.</p>
                            <div className="footer--block__input mb-3">
                                <input type="email" placeholder="Email address"/>
                                <div className="input-group-append">
                                    <button  type="button">Sign Up</button>
                                </div>
                            </div>
                        </div>

                        <div className='footer--bottom'>
                            <div className='footer--bottom__title'>
                                <h4>Lorem Ipsum</h4>
                                <div className='footer--bottom__title--footerP'>
                                    <p>For kids</p>
                                    <p>Romantic</p>
                                    <p>Finance</p>
                                    <p>Sci-Fi</p>
                                </div>

                            </div>
                            <div className='footer--bottom__title'>
                                <h4>Lorem Ipsum</h4>
                                <div className='footer--bottom__title--footerP'>
                                    <p>fndfn</p>
                                    <p>fdndfn</p>
                                    <p>fdndn</p>
                                    <p>fnfnn</p>
                                </div>

                            </div>
                            <div className='footer--bottom__title'>
                                <h4>Lorem Ipsum</h4>
                                <div className='footer--bottom__title--footerA'>
                                    <a href="https://www.instagram.com/danek_books/"><FiInstagram/></a>
                                    <a href=""><BsWhatsapp/></a>
                                    <a href=""><PiTelegramLogoDuotone/></a>
                                    <a href=""><MdOutlineAlternateEmail/></a>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>
            </div>

    );
};

export default Footer;