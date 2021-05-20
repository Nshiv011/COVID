import React from "react";
import Wh from "./Images/what.png";
import cough from "./Images/cough.png";
import tired from "./Images/tired.png";
import fever from "./Images/fever.png";

const What=()=>{
    return(
        <>
        <div className="conatiner-fluid">
            <div className="row i">
                <div className="col-sm-2">

                </div>
                <div className="col-sm-3 whats">
                    <img src={Wh} className="what"/>
                </div>
                <div className="col-sm-5 whats2">
                <h6>ABOUT DISEASES</h6>
                <h5>What is coronavirus?</h5>
                    <p>



Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. 
Most people infected with the COVID-19, virus will experience mild to moderate, respiratory illness 
& recover without requiring special treatment. Older people and those with underlying medical problem 
like cardiovascular disease.<br/><br/>

The COVID-19 virus spread primarily through droplet of saliva or discharge from the nose when an infected
 person coughs or sneezes so it’s important that you also practice respiratory etiquette.</p>
 <hr/>

<div className="container-fluid">
    <div className="row">
                    <div className="col-sm-2 iconss">
                    <img src={fever} className="icons1"/>
                    </div> 
                    <div className="col-sm-2 ico">
                    <p>High <br/> Fever</p>
                    </div> 
                    <div className="col-sm-2 ">
                    <img src={tired} className="icons2"/>
                    </div>
                    <div className="col-sm-2 ico">
                    <p>Heavy <br/> Tiredness</p>
                    </div> 
                    <div className="col-sm-2 iconss">
                    <img src={cough} className="icons1"/>
                    </div> 
                    <div className="col-sm-2 ">
                    <p>Dry <br/> Cough</p>
                    </div>
    </div>
</div>

                </div>
                <div className="col-sm-2">
                    
                </div>
            </div>
        </div>

        </>
    );
};

export default What;