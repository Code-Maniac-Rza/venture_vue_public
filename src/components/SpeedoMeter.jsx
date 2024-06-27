import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export const SpeedoMeter = ({ x }) => {
  return (
    <div className="flex justify-evenly">
      <ReactSpeedometer
        value={parseInt(x.percentage)}
        needleColor="steelblue"
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        customSegmentStops={[0, 25, 50, 75, 100]}
        maxValue={100}
      />
      <ReactSpeedometer
        value={parseInt(x.numberOfFemales)}
        needleColor="steelblue"
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        customSegmentStops={[0, 700, 800, 900, 1000, 1100]}
        maxValue={1100}
      />
    </div>
  );
};

export default SpeedoMeter;
