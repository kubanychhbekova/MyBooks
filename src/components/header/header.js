import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from "react-router-dom";

import {BiSearch} from "react-icons/bi";
import {HiOutlineShoppingBag} from "react-icons/hi";
const Header = () => {
    const [search, setSearch] = useState(false)
    const [burger, setBurger] = useState(false)
    const [value, setValue] = useState("")
    const navigate=useNavigate()
    const handleChange=(name)=>{
        navigate(`/books-search/${name}`)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header  ">
                    <ul className="header--ul" onClick={() => {
                        setBurger(false)
                    }}>
                        <li className="header--ul__li">
                            <NavLink to={"/"} className="header--ul__li--title active">Bookshop</NavLink>
                        </li>
                        <div className="header--ul__burger" style={{
                            right: burger ? "0" : "-340px"
                        }}>
                            <li className="header--ul__burger--li">
                                <NavLink to={"/books"} className="header--ul__burger--li__title">Categories</NavLink>
                            </li>
                            <li className="header--ul__burger--li">
                                <NavLink to={"/recent"} className="header--ul__burger--li__title">Recent</NavLink>
                            </li>
                            <li className="header--ul__burger--li">
                                <NavLink to={"/hello"} className="header--ul__burger--li__title">Books</NavLink>
                            </li>
                            <li className="header--ul__burger--li">
                                <NavLink to={"/about"} className="header--ul__burger--li__title">About Us</NavLink>
                            </li>
                        </div>
                    </ul>
                    <div className="header--icons">
                        <div className={`header--icons__search ${search ? "" : "active"}`} >
                            <div className="header--icons__search--input">
                                <input type="text" placeholder={`${search ? "Search" : ""}`} style={{
                                    display: search ? "block" : "none",
                                }} onChange={(e) => {
                                    setValue(e.target.value)

                                }}/>
                            </div>
                            <div className="header--icons__search--right">
                                <button style={{
                                    display: value.length === 0 ? "none" :
                                        "block" && search ? "block" : "none"
                                }} className="header--icons__search--right__clear"
                                        onClick={()=>{
                                            setValue("")
                                        }}>
                                    &times;
                                </button>
                                <BiSearch className="header--icons__search--right__icon "
                                          onClick={(e) => {
                                              value.length>0 ? handleChange(value) :  setSearch(!search)
                                          }}
                                />
                            </div>
                        </div>
                        <NavLink to={'/cart'}>
                            <HiOutlineShoppingBag className="header--icons__basket"/>
                        </NavLink>
                        <div className="header--icons__burger">
                            <button className="header--icons__burger--btn" onClick={() => {
                                setBurger(!burger)
                            }}>
                                   <span style={{
                                       transform: burger ? "translateY(0) rotate(45deg)" : "",
                                       transition: ".3s"
                                   }}></span>
                                <span style={{
                                    display: burger ? "none" : "",
                                    transition: "1s"
                                }}></span>
                                <span style={{
                                    transform: burger ? "translateY(0) rotate(-45deg)" : "",
                                    transition: ".3s"
                                }}></span>

                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;