import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Bottom";
import i1 from "./Images/food.png";
import i2 from "./Images/pump.png";
import i3 from "./Images/medical.png";
import i4 from "./Images/medicine.png";
import i5 from "./Images/bed.png";
import i6 from "./Images/doctor.png";
import i7 from "./Images/vaccine.png";

const Resource=()=>{
    return(
        <>
        <Header/>
        <div className="conatiner-fluid resources">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Get All COVID Related Resources <br/>
in One Place</h1>
                </div>
            </div>
        </div>


<div className="container-fluid">
    <div className="row">
        <div className="col-sm-12 write">
        <p>Covid cases are increasing every day, shortage of oxygen, medicines, beds, & Search of food options related issues are common and increasing. People in need are having difficulties procuring them because of the lack of contacts. Just Sit back & Relax We are here to Help</p>

        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-sm-4 hey">
        <img src={i1} className="yo"/>
        <h1 className="cont">Food Delivery</h1>
        <button className="buttonview">view</button>
        </div>
        <div className="col-sm-4 hey">
        <img src={i2} className="yo"/>
        <h1 className="cont">Oxygen Suppliers</h1>
        <button className="buttonview">view</button>
        </div>
        <div className="col-sm-4 hey">
        <img src={i3} className="yo"/>
        <h1 className="cont">Medical Equipments</h1>
        <button className="buttonview">view</button>
        </div>


        <div className="col-sm-4 hey">
        <img src={i4} className="yo"/>
        <h1 className="cont">Medicine</h1>
        <button className="buttonview">view</button>

        </div>
        <div className="col-sm-4 hey">
        <img src={i5} className="yo"/>
        <h1 className="cont">Covid Hospital</h1>
        <button className="buttonview">view</button>
        </div>
        <div className="col-sm-4 hey">
        <img src={i6} className="yo"/>
        <h1 className="cont">Covid Testing Location</h1>
        <button className="buttonview">view</button>
        </div>


        <div className="col-sm-4 hey">
        <img src={i7} className="yo"/>
        <h1 className="cont">Covid Vaccination Centre</h1>
        <button className="buttonview">view</button>

        </div>
        <div className="col-sm-4">
        
        </div>
        <div className="col-sm-4">
        
        </div>


        
    </div>
</div>



        <Bottom/>
        <Footer/>

        </>
    );
};

export default Resource;