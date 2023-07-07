import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Basket from "./basket";

const Cart = () => {
   const {basket} = useSelector(s => s)
    const navigate=useNavigate()

    return (
        <div className="container relative  overflow-x-auto">
            {basket.length !==0 ?
                <Basket/>
                : <div className="text-center my-10">
                    <h1>В корзине пока пусто</h1>
                    <p className="my-5 ">Загляните на главную, чтобы выбрать товары <br/> или найдите нужное в поиске</p>
                    <button onClick={()=> navigate("/")}
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Перейти на главную
                    </button>

                </div>
            }
        </div>


    );
};

export default Cart;