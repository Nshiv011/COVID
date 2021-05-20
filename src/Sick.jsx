import React from "react";
import { Form,Button,Row,Col } from 'react-bootstrap';




const Sick=()=>{
    return(
        
        <>
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-sm-12 Sicks">
                <h1>ARE YOU SICK?</h1>
                    <p>Let us help you</p>
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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label  className="lab">Age</Form.Label>
                        <Form.Control  className="lab1" type="password" />
                    </Form.Group>

                   


  <fieldset>
  <Form.Group as={Row}>
                    <Form.Label  className="lab">Covid Positive</Form.Label>
                    </Form.Group>         
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
        className="formcheck1"
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
        className="formcheck2"
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        
      </Col>
    </Form.Group>
  </fieldset>

  <Form>
  <Form.Group>
    <Form.File className="lab" id="exampleFormControlFile1" label="Covid Positive Report" />
  </Form.Group>
</Form>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="lab">Existing Problem</Form.Label>
    <Form.Control className="lab1" as="select">
      <option>Fever</option>
      <option>Cough</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="lab">Oxygen Level</Form.Label>
    <Form.Control className="lab1" as="select">
      <option>90-98</option>
      <option>80-90</option>
      <option>70-80</option>
      <option>60-70</option>
      <option>50-60</option>
    </Form.Control>
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




  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="lab">Requirement</Form.Label>
    <Form.Control className="lab1" as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>





  <fieldset>
  <Form.Group as={Row}>
                    <Form.Label  className="lab">Ready to Donate Plasma After Recovery</Form.Label>
                    </Form.Group>         
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
        className="formcheck1"
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
        className="formcheck2"
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        
      </Col>
    </Form.Group>
  </fieldset>













                    
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

export default Sick;
