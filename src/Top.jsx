import React, { useState }  from "react";
import { form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import MyVerticallyCenteredModal1 from "./Function1";
import MyVerticallyCenteredModal2 from "./Function2";


const Top=()=>{
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return(
        <>
        <div className="container-fluid top">
            <div className="row">
                <div className="col-sm-12">
                <div className="heading">
                    <h3>Coronavirus disease (COVID-19)<br/>
outbreak</h3>
<p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness<br/>
& requiring special treatment. Older people, and those with underlying medical problems</p>


<Button type="Button" variant="warning" onClick={() => setModalShow1(true)}>
<i class="fab fa-wpforms fa-lg"></i>Support@Home</Button>
<MyVerticallyCenteredModal1
        show={modalShow1} 
        onHide={() => setModalShow1(false)}/>

<Button type="Button" variant="success"  onClick={() => setModalShow2(true)}>
<i class="fas fa-user-tie"></i>Register As Service Provider</Button>
<MyVerticallyCenteredModal2
        show={modalShow2} 
        onHide={() => setModalShow2(false)}/>
                </div>

                </div>
            </div>
        </div>

        </>
    );
};

export default Top;