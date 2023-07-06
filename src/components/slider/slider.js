import React, {useEffect} from 'react';
import Data from "../data"
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick"
import {NavLink} from "react-router-dom";

const Scrollable = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(s => s)
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: Data})
    }, [])
    let settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 5.23,
        initialSlide: 0,
        swipeToSlide: true,
        row:1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4.5,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.7,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3.5,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 2.3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2.1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 325,
                settings: {
                    slidesToShow: 1.8,
                    infinite: false,
                    dots: false
                }
            },

        ]
    };
    return (
        <section id="slider">

                <div className="slider">

                    <div className="slider--title">
                        <h1>Books</h1>
                        <NavLink to={"/books"} className='view'>View all</NavLink>
                    </div>


                    <div className="slider--cards">
                        <Slider {...settings}>
                            {product.map((el) => {
                                return <div key={el.id} className="slider--cards__card">
                                    <NavLink key={el.id} to={`/books/${el.id}`}>
                                        <img src={el.image} alt=""/>
                                    </NavLink>
                                    <h3>{el.title}</h3>
                                    <p>by {el.author}</p>
                                </div>
                            })
                            }
                        </Slider>
                    </div>
                </div>


        </section>
    );
};

export default Scrollable;