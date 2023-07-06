import React from 'react';
import Hero from "../hero/hero";
import Genres from "../genres/genres";
import New from "../new/new";
import Scrollable from "../slider/slider";
import About from "../aboutUs/about";

const Pages = () => {
    return (
        <div>
            <Hero/>
            <Genres/>
            <New/>
            <Scrollable/>
            <About/>
        </div>
    );
};

export default Pages;