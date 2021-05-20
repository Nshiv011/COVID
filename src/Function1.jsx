import React, { useState }  from "react";
import { form } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';




function MyVerticallyCenteredModal1(props) {
    return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="head1">
          <Modal.Title id="contained-modal-title-vcenter">
          Support@Home
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        <div className="container-fluid">
            <div className="row">
                <div className="formp" id="mymodal">
                <p>Stay Home & We will Provide everything to you
</p>
<form action="action_page.php" />
  <div className="container">

    <label for="name">     </label>
    <input type="text" placeholder="Enter Name" name="name" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Contact No." name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Whatsapp No." name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Support:" name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="Adress" name="mail" required/>

    <label for="name">       </label>
    <input type="text" placeholder="City" name="mail" required/>

    
    <div class="clearfix">
<button type="submit" class="signupbtn">SUBMIT </button>    

      
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

export default MyVerticallyCenteredModal1;