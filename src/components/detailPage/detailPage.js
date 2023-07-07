import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiShareAlt} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {Data} from "../data";
import Modal from "../pages/modal/modal";

const DetailPage = () => {
    const dispatch = useDispatch()

    const {books} = useSelector(s => s)
    const {product} = useSelector(s => s)
    const [modal, setModal] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload: Data})

        dispatch({type: "GET_BOOKS", payload:   +id})

    }, [id])
    console.log(product)
    const AddToBasket = (product) => {
        let basket = JSON.parse(localStorage.getItem('basket')) || []
        let found = basket.find(el => el.id === product.id)
        if (found) {
            basket = [...basket]
        } else {
            basket = [...basket, {...product, quantity: 1}]
        }
        localStorage.setItem("basket", JSON.stringify(basket))
        return {type: "ADD_TO_BASKET", payload: product}
    }
    const addQuantity = (el) => {
        return   dispatch({type:"ADD_QUANTITY",payload:el})
    }
    const deleteQuantity = (el) => {
        return   dispatch({type:"DELETE_QUANTITY",payload:el})
    }
    const changeLike=(el)=>{
        return dispatch({type:"CHANGE_LIKE",payload:el})
    }
    return (
        <div id="cards">
            <div className="container">
                {
                    books.map((el) => {
                        return (
                            <div className="cards" key={el.id}>
                                <div className="cards--img">
                                    <img src={el.image} alt=""/>
                                </div>
                                <div className="cards--title">
                                    <div className="cards--title__top">
                                        <div className="cards--title__top--text">
                                            <h3>{el.title}</h3>
                                            <p>by{el.author}</p>
                                        </div>

                                        <div className="cards--title__top--icons">

                                            {
                                                el.like?
                                                    <AiFillHeart style={{color: "#ec2727"}}
                                                                 onClick={()=>{
                                                                     changeLike(el)
                                                                 }
                                                                 }
                                                                 className="cards--title__top--icons__heart"/>
                                                    :
                                                    <AiOutlineHeart
                                                        className="cards--title__top--icons__heart"
                                                        onClick={()=>{
                                                            changeLike(el)
                                                        }}/>
                                            }


                                            <BiShareAlt className="cards--title__top--icons__share" onClick={() => {
                                                setModal(!modal)
                                            }}/>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iusto magnam
                                        officia
                                        repellat ullam unde?</p>
                                    <h1>$ {el.price * el.quantity}</h1>

                                    <div className="cards--title__bottom">


                                        <button className="cards--title__bottom--btn" onClick={() => {
                                            dispatch(AddToBasket(el))
                                        }}>Add to Card
                                        </button>


                                        <button className="cards--title__bottom--btn2">
                                            <AiOutlineMinus className="icon" style={{
                                                color: el.quantity === 1 ? "grey" : ""
                                            }} onClick={() => {
                                                deleteQuantity(el)
                                            }}/> <h5>{el.quantity}</h5>
                                            <AiOutlinePlus className="icon" onClick={() =>
                                                addQuantity(el)
                                            }/>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {modal &&
                <Modal modal={() => {
                    setModal(false)
                }
                }/>
            }
        </div>
    );
};

export default DetailPage;