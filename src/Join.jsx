import React from "react";
import { Form,Button,Row,Col } from 'react-bootstrap';




const Join=()=>{
    return(
        
        <>
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-sm-12 Sicks">
                <h1>JOIN THE WAR AGAINST</h1>
                    <p>COVID-19</p>
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
                        <Form.Label className="Title">Volunteer Registraion</Form.Label><br/>
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
                        <Form.Label  className="lab">Email Id</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Phone Number</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Whatsapp Number</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="lab">Area to Volunteer</Form.Label>
    <Form.Control className="lab1" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>



                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">City You Can Volunteer</Form.Label>
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






        </>

    );
};

export default Join;
