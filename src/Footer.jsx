import React from 'react';
import covid1 from './Images/covid1.png';
import brillica1 from './Images/logo1.png'

const Footer=()=>{
    return(
        <>
        <div className="container-fluid ">
        <div className="row footer">
        <div className="col-sm-1"></div>
        
            <div className="col-sm-3 first">
                    <img src={covid1} className="covids"/>
                    <div className="footer-content">
                    <p>Quis ipsum suspendisse ultrices 
                    gravida. Risus commodo viverra 
                    maecenas accumsan.
                    </p>
                    <i className="fab fa-facebook fa-2x facebook"></i>
                    <i className="fab fa-linkedin fa-2x linkedin"></i>
                    <i className="fab fa-twitter fa-2x twitter"></i>
                    
            </div>
            </div>

            <div className="col-sm-2 second">
            <h3 className="quick">Quick Links</h3>
            <ul>
                <li>Plasma</li>
                <li>Important Links</li>
                <li>Recources</li>
                <li>About Us</li>
                <li>Symptoms</li>

            </ul>

            </div>

            <div className="col-sm-2 third">
            <h4 className="quick">Contact</h4>
            <p className="adress">SNAP Tower, 1st Floor,above 
GIMMIBYK, Lalpul, Saharanpur
Rd, Niranjanpur, Dehradun, 
Uttarakhand 248121
</p>
<p className="phone"> <i className="fas fa-phone-alt"></i>&nbsp; +91 88821-40688  |  +91 90840-63259 <br/> <i className="fas fa-envelope"></i> &nbsp; info@brillicaservices.com</p>


            </div>

            <div className="col-sm-3 fourth">
            <h4 className="quick">An Initiative</h4>
            <img src={brillica1} className="brillica"/>


            
            </div>
            <div className="col-sm-1">

            </div>

        
        </div>
        </div>


<div className="container-fluid  ">
<div className="row last">
    <div className="col-sm-1">

    </div>
    <div className="col-sm-5 copyright">
<p className="copy">Copyright © 2021 Covhelp-uk Design By Brillica Services</p>
    </div>
    <div className="col-sm-2">

    </div>
    <div className="col-sm-3 copyright">
<p className="copy">Terms & Conditions   |   Privacy Policy</p>
    </div>
    <div className="col-sm-1">

</div>
</div>
</div>

        </>
    );
};

export default Footer;