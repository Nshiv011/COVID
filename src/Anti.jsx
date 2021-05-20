import React from 'react';
import Icon1 from './Images/icon1.png';
import Icon2 from './Images/icon2.png';
import test from "./Images/test.png";
import icon5 from "./Images/icon5.png";
import icon6 from "./Images/icon6.png";

import Bottom from "./Bottom";

const Anti=()=>{
    return(
        <>
        <div className="container">
            <div className="row anti">

                <div className="col-sm-6 anti1">
                <h3 className="antih3">WHAT IS AN ANTIBODY ?</h3>
                <p className="anti-para">

                        An antibody is a protein that develops in the body as a normal course of the immune response to various types of infections. Antibodies are specific for different infections - as part of the immune response, the antibody attaches to specific parts of the pathogen in an effort to contain or destroy it.</p>


                </div>

                <div className="col-sm-6 anti2">
                        <h3 className="antih3-2">WHAT IS CORONAVIRUS ANTIBODY TEST?</h3>
                        <p className="anti-para-2">
                        It detects the presence of Covid-19 antibodies in our body and suggests if one has acquired immunity against the virus.It is a simple blood test.</p>
                                            
                </div>

            </div>
        </div>




        {/* CORONAVIRUS and CORONAVIRUS antibodies */}
        <div className="container-fluid difference">
            <div className="row ">

          

                <div className="col-sm-9 ">
                <h2>What is the Difference Between Coronavirus Test and a Coronavirus Antibody Test?</h2>
                </div>

            </div>
            <div className="row icon-body">

            <div className="col-sm-1 icon1">
            <img src={Icon1} className="icon1"/>
                </div>

            <div className="col-sm-4 icon3 ">

           
                <h3>Coronavirus Antibody Test
</h3>
                <p>
The Coronavirus Antibody Test determines whether one has previously been infected by COVID-19 and now have developed antibodies/immunity against it.</p>


             

                </div>

                <div className="col-sm-1 icon2 ">
                <img src={Icon2} className="icon2"
                />
                </div>

                <div className="col-sm-4 icon4 ">
                <h3>Coronavirus Test
                </h3>
                <p>
                Coronavirus (RT-PCR) test determines if you are currently infected with Corona Virus ( Covid-19 )</p>


                
                </div>
                
                

            </div>
        </div>

        

        {/* TESTED */}

<div className="container-fluid covid-test">
    <div className="row">
    <div className="col-sm-1">

    </div>
        <div className="col-sm-7 test-content">
        <h3>WHY SHOULD YOU GET TESTED?
        </h3>
        <ul>
            <li>To know if you have been exposed to COVID-19 infection in recent times.</li>
            <li>To determine the presence of antibodies against COVID-19 in your body (Total antibodies).</li>
            <li>To confirm if your body has recovered from the covid-19 infection (IgG antibodies).</li>
            <li>Any person who tests positive for COVID-19 but doesn’t have any symptoms is an asymptomatic case. Asymptomatic cases should also get tested as their body may be fighting the infection without showing any symptoms.</li>
        </ul>

        </div>
        <div className="col-sm-3 test">
        <img src={test} className="test"/>

        </div>
        <div className="col-sm-1">

        </div>
    </div>
</div>


{/* Difference */}

<div className="container-fluid diff">
            <div className="row ">

          

                <div className="col-sm-9 ">
                <h2>What is the Difference Between Coronavirus Test and a Coronavirus Antibody Test?</h2>
                </div>

            </div>
            <div className="row icon-body">

            <div className="col-sm-1 icon6">
            <img src={icon6} className="icon6"/>
                </div>

            <div className="col-sm-4 icon7 ">

           
               
                <p>If tested positive, it means you have developed antibody/immunity against Covid-19.</p>


             

                </div>

                <div className="col-sm-1 icon5 ">
                <img src={icon5} className="icon5"
                />
                </div>

                <div className="col-sm-4 icon8 ">
                
                <p>If tested negative, it means you may never have been exposed to COVID-19. However, it doesn’t rule out the possibility of you being currently infected</p>


                
                </div>
                
                

            </div>
        </div>

        
<Bottom/>


        </>
    );
};
export default Anti;