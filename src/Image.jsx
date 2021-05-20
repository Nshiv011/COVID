import React from 'react';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import Carousel from 'react-bootstrap/Carousel'

const Image=()=>{
    return(
        <>
        <div className="container-fluid">
    <div className="row count">
        <div className="country">
        

        <Carousel>
  <Carousel.Item interval={1000}>
    <a href="#"><img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      
    />
    </a>
    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <a href="#"><img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    /></a>
    
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <a href="#">
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    /></a>
    
  </Carousel.Item>

</Carousel>




           
        </div>
    </div>
</div>

        </>

    );

};

export default Image;