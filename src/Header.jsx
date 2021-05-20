import React from 'react';
import covid from './Images/covid.png';
import brillica from './Images/logo.png';
import {Nav, NavDropdown,NavLink} from "react-bootstrap";


const Header=()=>{
    return(
        <>
        <div className="container-fluid header">
        <div className="row ">
        <div className="col-sm-1 head"></div>
        
            <div className="col-sm-2 head-first">
                 <a href="/">   <img src={covid} className="covid"/></a>
                    
            </div>

            <div className="col-sm-6 head-second">
            <div className="container-fluid">
                <div className="row sick">
                <button type="button" className="sick-b" > <a href="/sick">ARE YOU SICK?</a></button>
                </div>
                <div className="row">
<div className="col-sm-3 p">

                {/* Plasma */}
                <NavDropdown title="PLASMA" id="basic-nav-dropdown" className="plasma">
        <NavDropdown.Item className='itms' href="/home">Antibody Test</NavDropdown.Item>
        <NavDropdown.Item href="#">Register As Donor</NavDropdown.Item>
        <NavDropdown.Item href="#">Request for Plasma</NavDropdown.Item>
                </NavDropdown>

</div>
{/* IMPORTANT LINKS */}
<div className="col-sm-3 p">
                <NavDropdown title="IMPORTANT LINKS" id="basic-nav-dropdown " className="Important">
        <NavDropdown.Item className='itms' href="#">Mental Health</NavDropdown.Item>
        <NavDropdown.Item href="#">Advisory</NavDropdown.Item>
        <NavDropdown.Item href="#">Health Bulletin of COVID-19
For Uttarakhand</NavDropdown.Item>
        <NavDropdown.Item href="#">Dedicated Covid Facilities
In Uttarakhand</NavDropdown.Item>
        <NavDropdown.Item href="#">Corona Guideline</NavDropdown.Item>
        <NavDropdown.Item href="#">Circulars/ Letters</NavDropdown.Item>
        <NavDropdown.Item href="#">DENGUE Awereness
Prevention Management</NavDropdown.Item>
        <NavDropdown.Item href="#">Training Material</NavDropdown.Item>
                </NavDropdown>
</div>

{/* RESOURCE */}
<div className="col-sm-3 p">
                <NavDropdown title="RESOURCE" id="basic-nav-dropdown" href="/res" className="resource">
        <NavDropdown.Item className='itms' href="/res">Food Delivery</NavDropdown.Item>
        <NavDropdown.Item href="/res">Oxygen Suppliers</NavDropdown.Item>
        <NavDropdown.Item href="/res">Medical Equipment</NavDropdown.Item>
        <NavDropdown.Item href="/res">Medicine</NavDropdown.Item>
        <NavDropdown.Item href="/res">Covid Hospital</NavDropdown.Item>
                </NavDropdown>
                </div>   
                


                <div className="col-sm-3 p">
                <button className="volunters"><a href="/join">
                Volunteer Registraion</a>
                </button> 

                </div>
                </div>

            </div>
            
            </div>
            

            

            <div className="col-sm-2 head-fourth">
            <h4 className="head-quick">An Initiative By</h4>
            <img src={brillica} className="brillica1"/>


            
            </div>
            <div className="col-sm-1">

            </div>

        
        </div>
        </div>



        </>
    );
};

export default Header;