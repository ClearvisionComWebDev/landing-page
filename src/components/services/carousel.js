import React from "react";
import Slider from "react-slick";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(){
    var settings = {
        infinite:true,
        slidesToShow: 1
      };
  return (
    <Slider {...settings}>
       <div>
        <img src={image1} alt={image1} style={{width:"60%",margin:"auto",padding:"50px"}}/>
        <p style={{textAlign:"center",color:"white", backgroundColor:"#00142e",opacity:"60%"}}>Concrete slabs to protect cables/ducts/pipelines</p>
      </div>
      <div>
      <img src={image2} alt={image2} style={{width:"40%",margin:"auto",padding:"50px"}}/>
      </div>
      <div>
      <img src={image3} alt={image3} style={{width:"70%",margin:"auto",padding:"50px"}}/>
      </div>
    </Slider>
  );
}

