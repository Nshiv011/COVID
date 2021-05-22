import React from 'react';
import facebook from "./Images/facebook.png";
import link from "./Images/link.png";
import twitter from "./Images/twitter.png";
import whatsapp from "./Images/whatsapp.png";
import mental from "./Images/mental.png";
import ad from "./Images/ad.png";
import health from "./Images/health.png";
import def from "./Images/def.png";
import co from "./Images/co.png";
import cl from "./Images/cl.png";
import de from "./Images/de.png";
import train from "./Images/train.png";



const Bottom=()=>{
    return(
        <>
        {/* BUTTON */}
<div className="container-fluid ">
<div className="row button">
    <div className="row upper">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-2">
        <button className="buttons">Mental Health</button>
        </div>
        <div className="col-sm-2">
        <button className="buttons">Advisory</button>
        </div>
        <div className="col-sm-2">
        <button className="buttons1">Health Bulletin of COVID-19
For Uttarakhand</button>
        </div>
        <div className="col-sm-2">
        <button className="buttons2">Dedicated Covid Facilities
In Uttarakhand</button>
        </div>
        <div className="col-sm-2">
            
        </div>
    </div>


    <div className="row upper ">
    <div className="col-sm-2">

</div>
<div className="col-sm-2">
<button className="buttons">Corona Guideline</button>
</div>
<div className="col-sm-2">
<button className="buttons">Circulars/ Letters</button>
</div>
<div className="col-sm-2">
<button className="buttons1">DENGUE Awereness
Prevention Management</button>
</div>
<div className="col-sm-2">
<button className="buttons">Training Material</button>
</div>
<div className="col-sm-2">
    
</div>
    </div>
    </div>


</div>


{/* social */}
<div className="container-fluid ">
    <div className="row upper2 social-button">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-2 socials">
        <img src={facebook} className="facebook"/>
        </div>
        <div className="col-sm-2 socials">
        <img src={twitter} className="facebook"/>
        </div>
        <div className="col-sm-2 socials">
        <img src={link} className="facebook"/>
        </div>
        <div className="col-sm-2 socials-last">
        <img src={whatsapp} className="facebook"/>
        </div>
        <div className="col-sm-2">
            
        </div>
    </div>
</div>

        </>

    );

};

export default Bottom;