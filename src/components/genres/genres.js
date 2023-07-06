import React from 'react';
import imgSciFi from '../../assets/img/image 8.svg'
import imgForKids from '../../assets/img/image 8 (1).svg'
import imgPsychology from '../../assets/img/image 8 (2).svg'
import imgRomantic from '../../assets/img/image 8 (3).svg'
import imgDetective from '../../assets/img/image 8 (4).svg'
import imgFinance from '../../assets/img/image 8 (5).svg'
import {NavLink} from "react-router-dom";
const Genres = () => {
    return (
        <div id='genres'>
            <div className="container">
                <div className="genress">
                    <div className="genress--zagalovok">
                        <h1>Genres</h1>
                        <NavLink style={{
                            display:'flex',
                            alignItems:'end'
                        }} to={'/books'}>
                            <p>View all</p>
                        </NavLink>
                    </div>
                </div>
                <div className="genres">
                    <div className="genres--block">
                        <img src={imgSciFi} alt="img"/>
                        <h4>Sci-Fi</h4>
                    </div>
                    <div className="genres--block">
                        <img src={imgForKids} alt="img"/>
                        <h4>For-Kids</h4>
                    </div>
                    <div className="genres--block">
                        <img src={imgPsychology} alt="img"/>
                        <h4>Psychology</h4>
                    </div>
                    <div className="genres--block">
                        <img src={imgRomantic} alt="img"/>
                        <h4>Romantic</h4>
                    </div>
                    <div className="genres--block">
                        <img src={imgDetective} alt="img"/>
                        <h4>Detective</h4>
                    </div>
                    <div className="genres--block">
                        <img src={imgFinance} alt="img"/>
                        <h4>Finance</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genres;