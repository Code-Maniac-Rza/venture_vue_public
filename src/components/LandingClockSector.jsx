import React from "react";

const LandingClockSector = (props) => {
  return (
    <div>
      <h4 className="text-pink-700 font-bold text-xl mt-3 ">
        {" "}
        {props.title} <br /> &#x2015;&#x2015;&#x2015;&#x2015;
      </h4>
      <p className="text-white bold">
        <span className="text-white font-semibold text-xl">2021:</span>{" "}
        <span className="text-green-600 font-semibold text-2xl">
          &nbsp;{props.current}
        </span>
      </p>
      <p>
        <span className="text-white font-semibold text-xl">2030:</span>{" "}
        <span className="text-green-600 font-semibold text-2xl">
          &nbsp;{props.till_2030}
        </span>
      </p>
    </div>
  );
};

export default LandingClockSector;
