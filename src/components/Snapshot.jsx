import React from "react";
import { useState } from "react";
import { StateData } from "../Data/StateData";
const Snapshot = ({ stateId }) => {
  const stateInfo = StateData.find((data) => data.id === parseInt(stateId));

  const text = stateInfo.stateInformation;

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="snapshot-container flex justify-between mt-5 ml-3 mr-3 bg-gray-100 p-5">
      <div className="h-auto w-[150%]">
        <h4 className=" text-green-700 font-bold ">
          &#x2015;&#x2015; SNAPSHOT
        </h4>
        <p className="text-3xl font-bold mt-3">{stateInfo.stateTitle}</p>
        <p className="text-xl font-semibold mt-2">
          {stateInfo.stateSubHeading}
        </p>
        <h6 className="mt-2 mr-5 text-wrap">
          {showMore ? text : `${text.substring(0, 300)}`}
          <button className="btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <button className="ml-0 text-pink-600">
                <br />
                [- Show Less]
              </button>
            ) : (
              <span className="ml-0 text-pink-600">
                <br />
                [+Show More]
              </span>
            )}
          </button>
        </h6>
      </div>
      <div className="flex items-end lg:w-full relative top-0 left-0 text-left">
        {/* <div
          content=""
          className="w-20 h-20 bg-blue-500 rounded-sm absolute -z-1 "
        ></div> */}
        <div className="snapshot-card w-full md:w-full sm:w-full relative top-0 left-0 z-10">
          <div class="w-full p-4 bg-black border border-black-200 rounded-lg shadow sm:p-8 dark:bg-white dark:border-gray-100">
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {stateInfo.sideInformation.map((value, index) => {
                  if (value.image === "") {
                    return <></>;
                  }
                  return (
                    <>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src={value.image}
                              alt=""
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-wrap">
                              {value.info}
                            </p>
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-right">
          <img
            src="	https://www.investindia.gov.in/themes/investindia/image/banner-shape.svg"
            className="absolute top-0 left-0 float-right animate-spin-slow invert h-[125%] w-[125%] rotate-180"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Snapshot;
