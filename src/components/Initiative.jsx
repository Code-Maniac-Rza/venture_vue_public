import React from "react";
import Slider from "react-infinite-logo-slider";

const Initiative = () => {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2020-02/Skill%20India%20Kaushal%20Bharat%20Kushal%20Bharat%20Logo_0.png"
          alt="any"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2020-02/Digital_India_logo.png"
          alt="any2"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2020-02/jal-shakti-logo-B37E85384F-seeklogo.com_.png"
          alt="any3"
          className="w-36"
        />
      </Slider.Slide>

      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2020-02/icon1_2.png"
          alt="any3"
          className="w-36"
        />
      </Slider.Slide>
    </Slider>
  );
};

export default Initiative;
