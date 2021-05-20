import React from 'react';
import hero from './Images/hero.png';


const Hero=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <img src={hero} className="hero"/>
            </div>
        </div>
        
        </>
    );
};
export default Hero;