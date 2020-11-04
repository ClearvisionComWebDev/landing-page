import React, { Component } from "react";
import Slider from "react-slick"
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.jpg";
import image7 from "./img/image7.jpg";
import image8 from "./img/image8.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component{
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
    render() {
      const settings = {
      dots: true,
      infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000
    };
  return (
    <Slider ref={slider => (this.slider = slider)} {...settings}>
       <div>
        <img src={image1} alt={image1} style={{width:"100%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image2} alt={image2} style={{width:"80%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image3} alt={image3} style={{width:"100%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image4} alt={image4} style={{width:"80%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image5} alt={image5} style={{width:"80%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image6} alt={image6} style={{width:"80%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image7} alt={image7} style={{width:"100%",margin:"auto"}}/>
      </div>
      <div>
      <img src={image8} alt={image8} style={{width:"80%",margin:"auto"}}/>
      </div>
    </Slider>
  );
}
}

