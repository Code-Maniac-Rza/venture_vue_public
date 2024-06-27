import React from "react";
import Slider from "react-infinite-logo-slider";

const BrandCarousel = () => {
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
          src="https://static.investindia.gov.in/s3fs-public/2023-09/image%20280%20%281%29_0.png"
          alt="any"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2023-09/Startup%20India.png"
          alt="any2"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2023-09/wastetowealth.png"
          alt="any3"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2023-09/ODOP%20logo.png"
          alt="any3"
          className="w-36"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://static.investindia.gov.in/s3fs-public/2023-09/image%20281_0.png"
          alt="any3"
          className="w-36"
        />
      </Slider.Slide>
    </Slider>
  );
};

export default BrandCarousel;
