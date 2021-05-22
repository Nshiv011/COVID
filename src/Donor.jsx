import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Bottom";

const Donor=()=>{
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 donor">
                <h1>COVID-19 Convalescent 
Plasma Donation</h1>
<h4>Your contribution may help save a life!</h4>

                </div>

            </div> 
        </div>


<Bottom/>
<Footer/>
        </>
    )
}

export default Donor;