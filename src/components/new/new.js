import React from 'react';
import img5 from '../../assets/img/image 5.png'
import img6 from '../../assets/img/image 6.png'
import img7 from '../../assets/img/image 7.png'
const New = () => {
    return (
        <div id='books'>
            <div className="container">
                <div className="books">
                    <h1>New Books</h1>
                    <div className="books--blocks">
                        <div className="books--blocks__block1">
                            <img src={img6} alt="img"/>
                            <h5>The Climate Book: The Facts and the Solutions</h5>
                            <p>by Greta Thunberg</p>
                        </div>
                        <div className="books--blocks__block2">
                            <img src={img5} alt="img"/>
                            <h5>Rest Is Resistance: A Manifesto</h5>
                            <p>by Tricia Hersey</p>
                        </div>
                        <div className="books--blocks__block3">
                            <img src={img7} alt="img"/>
                            <h5>A New Name: Septology VI-VII</h5>
                            <p>by Jon Fosse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;