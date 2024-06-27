import { React } from "react";
import { SpeedoMeter } from "./SpeedoMeter";
import { StateData } from "../Data/StateData";
const Demographics = ({ stateId }) => {
  const stateInfo = StateData.find((data) => data.id === parseInt(stateId));

  return (
    <>
      <div className="bg-gray-900 text-white mb-10">
        <h4 className=" text-green-700 font-bold text-xl ml-3 mt-16 mb-5 p-7">
          &#x2015;&#x2015; <span className="">DEMOGRAPHICS</span>
        </h4>
        <span className=" ml-80 mt-4 text-lg font-semibold">
          Urbanisation Rate (%)
        </span>

        <span className=" ml-80 mt-4 text-lg font-semibold">
          Females/1000 Males
        </span>

        <div className="mt-10 ml-5 relative">
          <SpeedoMeter x={stateInfo.demographics} />
        </div>
        <div className="flex justify-center gap-3">
          <div>
            <img
              src="	https://www.investindia.gov.in/themes/investindia/image/male-female.png"
              className="absoulte -mt-16"
              alt=""
            />
          </div>
          <div className="-mt-12 ml-5 font-semibold text-3xl">Demographics</div>
        </div>

        <div className="flex justify-center mt-5">
          <span className="text-xl font-medium">
            {stateInfo.demographics.subHeading}
          </span>
        </div>
        <div className="mt-5 flex justify-center ml-11 mr-11 items-center">
          <center className=" text-wrap">
            {stateInfo.demographics.description}{" "}
          </center>
        </div>

        <div class="block m-auto w-[90%] p-6 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mt-8 mb-10">
          <div className="flex flex-wrap justify-items-start ml-12">
            {stateInfo.demographicsFlowDiv.map((value, index) => {
              if (value.img === "") {
                return;
              }
              return (
                <>
                  <div className="flex p-5">
                    <img src={value.img} alt="" />
                    <div className="ml-2">
                      <span className="text-2xl font-semibold">
                        {value.value}
                      </span>
                      <span>
                        <br />
                        {value.description}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demographics;
