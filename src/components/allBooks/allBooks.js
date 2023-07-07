import React, {useEffect, useState} from 'react';
import {Data} from "../data";
import {useDispatch, useSelector} from "react-redux";
import {RiEqualizerLine} from "react-icons/ri";
import BooksGenres from "./booksGenres/booksGenres";
import {NavLink} from "react-router-dom";

const AllBooks = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const dispatch = useDispatch()
    const {product} = useSelector(s => s)

    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: Data})
    },[])
    const burgerClose = () => {
        setBurgerMenu(!burgerMenu)
    }

    return (
        <div id="book">
            <div className="container">
                <div className="book">
                    <div className="book--top">
                        <div className="book--top__title">
                            <h1>All Books</h1>
                            <p>Here you can find all the books you need</p>
                        </div>

                        <div className="book--top__filter">
                            <div className="book--top__filter--title" style={{
                                right: burgerMenu ? "" : "-70% "
                            }}>
                                <h2>Filters</h2>
                                <a href="#">Clear filters</a>

                            </div>

                            <div className="book--top__filter--button">
                                <div className="book--top__filter--button__select">
                                    <p>Sort by</p>
                                    <select className="book--top__filter--button__select--option">
                                        <option value="value1">popular</option>
                                        <option value="value2">popular</option>
                                        <option value="value3">new</option>

                                    </select>

                                </div>
                                <button className="book--top__filter--button__burger"
                                        onClick={burgerClose}>
                                    <RiEqualizerLine/>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="book--bottom">
                        <h2 style={{
                            right: burgerMenu ? "" : "-60% "
                        }}>Genres</h2>
                        <div className="book--bottom__genres">
                            <div className="book--bottom__genres--left" style={{
                                right: burgerMenu ? "0" : ""
                            }}>
                                <div className="book--bottom__genres--left__cross" onClick={burgerClose}/>

                                {
                                    <BooksGenres close={burgerClose}/>
                                }
                            </div>
                            <div className="book--bottom__genres--right ">
                                {
                                    product.map((el) => {
                                        return (
                                            <div key={el.id} className="book--bottom__genres--right__card">
                                                <div className="book--bottom__genres--right__card--img">
                                                    <NavLink key={el.id} to={`/books/${el.id}`}>
                                                        <img src={el.image} alt=""/>
                                                    </NavLink>
                                                </div>


                                                <div className="book--bottom__genres--right__card--title">
                                                    <h5>{el.title}</h5>
                                                    <p>by {el.author}</p>
                                                </div>


                                            </div>
                                        )
                                    })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AllBooks;