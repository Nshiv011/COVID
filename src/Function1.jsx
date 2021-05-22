import React, { useState }  from "react";
import { form } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import { Form,Row,Col } from 'react-bootstrap';



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

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control className="city" as="select" placeholder="Support:">
      <option className="supp">Support:</option>
      <option>Mental Health</option>
      <option>Advisory</option>
      <option>Health Bulletin of COVID-19
For Uttarakhand</option>
      <option>Dedicated Covid Facilities
In Uttarakhand</option>
<option>Corona Guideline</option>
<option>Circulars/ Letters</option>
<option>DENGUE Awereness
Prevention Management</option>
<option>Training Material</option>
    </Form.Control>
  </Form.Group>

    <label for="name">       </label>
    <input type="text" placeholder="Adress" name="mail" required/>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control className="city" as="select" placeholder="City">
      <option className="supp">City:</option>
      <option>Almora</option>
      <option>Badrinathpuri</option>
      <option>Bageshwar</option>
      <option>Bahadarabad</option>
      <option>Bhimtal</option>
      <option>Chakrata</option>
      <option>Chamba</option>
      <option>Chamoli Gopeshwar</option>
      <option>Champawat</option>
      <option>Clement Town</option>
      <option>Dehradun</option>
      <option>Devaprayag</option>
      <option>Dharchula</option>
      <option>Dogadda</option>
      <option>Doiwala</option>
      <option>Gangotri</option>
      <option>Gochar (Gauchar)</option>
      <option>Haldwani </option>
      <option>Haridwar </option>
      <option>Joshimath </option>
      <option>Karnaprayag </option>
      <option>Kedarnath </option>
      <option>Khatima </option>
      <option>Kotdwar </option>
      <option>Lansdowne </option>
      <option>Mussoorie </option>
      <option>Nainital </option>
      <option>Narendranagar </option>
      <option>Pauri </option>
      <option>Pithoragarh </option>
      <option>Raipur </option>
      <option>Ramnagar </option>
      <option>Ranikhet </option>
      <option>Rishikesh </option>
      <option>Roorkee </option>
      <option>Rudraprayag </option>
      <option>Srinagar </option>
      <option>Tehri </option>
      <option>Uttarkashi </option>
      <option>Vikasnagar </option>
    </Form.Control>
  </Form.Group>

    
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