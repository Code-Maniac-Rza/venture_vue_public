import React from "react";
import { StateData } from "../Data/StateData";

const InvestmentOpportunity = ({ stateId }) => {
  const stateInfo = StateData.find((data) => data.id === parseInt(stateId));

  const imgIcons = [
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-projects.svg",
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-opportunity.svg",
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-promoters.svg",
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-district.svg",
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-private-project.svg",
    "https://www.investindia.gov.in/themes/investindia/image/svg_icon/icon-gov-project.svg",
  ];

  return (
    <div className="mb-32 mt-16">
      <div className=" text-center">
        <h4 className=" text-green-700 font-bold text-xl ml-3 mt-10">
          &#x2015;&#x2015; INVESTIBLE PROJECTS &#x2015;&#x2015;
        </h4>
        <br />
        <p className="text-4xl font-semibold">
          Investment Opportunities in {stateInfo.stateName}
        </p>
      </div>
      <div className="investment_timeline items-center ml-32 mt-20">
        <ol class="items-center sm:flex">
          {stateInfo.Timeline.map((value, index) => {
            if (value.title === "") {
              return;
            }
            return (
              <>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-full ring-0 ring-white dark:bg-blue-300 sm:ring-8 dark:ring-cyan-500 shrink-0">
                      <img
                        className="w-8 h-8  text-blue-800 dark:text-blue-300"
                        src={imgIcons[(index + 1) % 6]}
                      ></img>
                    </div>
                    <div class="hidden sm:flex w-32 bg-gray-200 h-0.5 dark:bg-green-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {value.title}
                    </time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                      {value.value}
                    </p>
                  </div>
                </li>
                ;
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default InvestmentOpportunity;
