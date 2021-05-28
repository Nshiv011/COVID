import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bottom from "./Bottom";
import { Form,Button,Row,Col } from 'react-bootstrap';

const Plasma=()=>{
    return(
        <>
        <Header/>

        <div className="container-fluid ">
            <div className="row ">
                <div className="col-sm-12 donor">
                <h1>COVID-19 Convalescent <br/>
Plasma Donation</h1>
                    <p>Request for Plasma!</p>
                </div>
            </div>
        </div>


    <div className="container-fluid">
        <div className="row canns">
            <div className="col-sm-2">
    
            </div>
            
            <div className="col-sm-4 can">
    <h1>You CAN donate plasma if:</h1>
    <ul>
        <li>A patient positive for COVID-19 has been<br/> prescribed for Plasma by the attending doctor,<br/> patient may be of any age group
</li>
<li>You already have a replacement donor or not<br/> – if you have a donor then we will facilitate their <br/>donation of Plasma</li>

    </ul>
            </div>
            <div className="col-sm-4 cannot">
    <h1>You cannot donate plasma if:</h1>
    <ul>
        <li>Your weight is less than 50 kg</li>
        <li>You have ever been pregnant</li>
        <li>You are diabetic on insulin</li>
        <li>Your Blood Pressure is more than 140 and diastolic</li>
<li>less than 60 or more than 90</li>
<li>You have uncontrolled diabetes or hypertension with</li>
<li>change in medication in last 28 days</li>
<li>You are a Cancer Survivor</li>
<li>You have chronic kidney/heart/lung or liver disease.</li>
    </ul>
            </div>
            <div className="col-sm-2">
    
            </div>
        </div>
    </div>

        <div className="container-fluid ">
            <div className="row ">
                <div className="col-sm-2">
                
                </div>
                <div className="col-sm-8 sick-form">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="Title">Let Us Help you</Form.Label><br/>
                        <Form.Label className="lab">Name</Form.Label>
                        <Form.Control className="lab1" type="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Age</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>
                    <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label  className="lab">Sex</Form.Label>
                    </Form.Group>         
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
        className="formcheck1"
          type="radio"
          label="MALE"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
        className="formcheck2"
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck2"
          type="radio"
          label="Other"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Address</Form.Label>
                        <Form.Control  className="lab2" type="password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Phone No.</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>


  <fieldset>
  <Form.Group as={Row}>
                    <Form.Label  className="lab">Blood Group</Form.Label>
                    </Form.Group>         
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
      <Col sm={8}>
        <Form.Check
        className="formcheck1"
          type="radio"
          label="o+"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
        className="formcheck3"
          type="radio"
          label="o-"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck3"
          type="radio"
          label="A+"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck3"
          type="radio"
          label="A-"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck3"
          type="radio"
          label="B+"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck3"
          type="radio"
          label="B-"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck4"
          type="radio"
          label="AB+"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck4"
          type="radio"
          label="AB-"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
        className="formcheck4"
          type="radio"
          label="Don't Know"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />


        
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Date of COVID Positive test</Form.Label>
                        <Form.Control  className="lab1" type="date" />
                    </Form.Group>





                    <Form>
  <Form.Group className="upload">
    <Form.File className="lab" id="exampleFormControlFile1" label="Covid Positive Report" />
  </Form.Group>
</Form>

<Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Name of the hospital</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>







<Form>
  <Form.Group className="upload">
    <Form.File className="lab" id="exampleFormControlFile1" label="Hospital Report(Upload)" />
  </Form.Group>
</Form>

<Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Any Critical Issue</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>




                    
                    <Button className="lab3" variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>       
                </div>
                <div className="col-sm-2">
                
                </div>
            </div>
        </div>

<Bottom/>
<Footer/>
        </>
    )
}

export default Plasma;