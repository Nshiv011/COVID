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
<div className="container-fluid button">
    <div className="row upper">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-2">
        <img src={mental} className="but"/>
        </div>
        <div className="col-sm-2">
        <img src={ad} className='but'/>
        </div>
        <div className="col-sm-2">
        <img src={health} className='but'/>
        </div>
        <div className="col-sm-2">
        <img src={def} className='but'/>
        </div>
        <div className="col-sm-2">
            
        </div>
    </div>


    <div className="row upper">
    <div className="col-sm-2">

</div>
<div className="col-sm-2">
<img src={co} className='but'/>
</div>
<div className="col-sm-2">
<img src={cl} className='but'/>
</div>
<div className="col-sm-2">
<img src={de} className='but'/>
</div>
<div className="col-sm-2">
<img src={train} className='but'/>
</div>
<div className="col-sm-2">
    
</div>
    </div>


</div>


{/* social */}
<div className="container-fluid social-button">
    <div className="row upper2">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-2">
        <img src={facebook} className="facebook"/>
        </div>
        <div className="col-sm-2">
        <img src={twitter} className="facebook"/>
        </div>
        <div className="col-sm-2">
        <img src={link} className="facebook"/>
        </div>
        <div className="col-sm-2">
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