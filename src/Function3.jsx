import React, { useState }  from "react";
import { form } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';





  function MyVerticallyCenteredModal3(props) {
    return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="head3">
          <Modal.Title id="contained-modal-title-vcenter">
          Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <div className="container-fluid">
            <div className="row">
                <div className="formp" id="mymodal">
                <p>Your Services Could be Useful for Someone in Need</p>
<form action="action_page.php" />
  <div className="container">

    <label for="name">     </label>
    <input type="text" placeholder="Enter Name" name="name" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Contact No." name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Whatsapp No." name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Service:" name="mail" required/>

    <label for="none">Type:</label><br/>

    <input type="radio"  name="paid" />
    <label for="pay">Paid</label>
    <input type="radio" name="paid" />
    <label for="pay">Free</label><br/>

  <label for="name">       </label>
    <input type="text" placeholder="Service Location:" name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="City:" name="mail" required/>
  
    <div class="clearfix">
<button type="submit" class="signupbtn2">SUBMIT </button>    

      
    </div>
  </div>
                </div>
            </div>
        </div>




        </Modal.Body>
        
      </Modal>
      </>
    );
  };

  export default MyVerticallyCenteredModal3;

