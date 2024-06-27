import React, { useState } from "react";
import LandingClockSector from "./LandingClockSector";
import Clock from "./Clock";

const LandingClock = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderResult = () => {
    switch (selectedOption) {
      case "Metals & Mining":
        return (
          <div>
            <LandingClockSector
              title="Coal Production"
              current="1400.59 Million Tonnes"
              till_2030="1860.77 Million Tonnes"
            />
          </div>
        );
      case "Construction":
        return (
          <div>
            <LandingClockSector
              title="Cement produced every minute"
              current="559.36 Million Tonnes"
              till_2030="917.31 Million Tonnes"
            />
          </div>
        );
      case "Chemicals":
        return (
          <div>
            <LandingClockSector
              title="Fertilizer Production every minute"
              current="81.03 Million Tonnes"
              till_2030="95.71 Million Tonnes"
            />
          </div>
        );
      case "Renewable Energy":
        return (
          <div>
            <LandingClockSector
              title="Electricity Generation from RE every minute"
              current="241647.64 Billion Unit"
              till_2030="900887.69 Billion Unit"
            />
          </div>
        );
      case "Agriculture and Allied Sectors":
        return (
          <div>
            <LandingClockSector
              title="Food grain production in India"
              current="581 Tons"
              till_2030="739 Tons"
            />
          </div>
        );
      case "Oil & Gas":
        return (
          <div>
            <LandingClockSector
              title="Petroleum Refinery Products"
              current="444.27 Million Tonnes"
              till_2030="482.07 Million Tonnes"
            />
          </div>
        );
      default:
    }
  };

  return (
    <div className="flex justify-evenly">
      <div className="ml-5">
        <div>
          <h2 className=" text-green-500 font-bold text-2xl mb-3">
            In a Minute &#x2015;&#x2015;&#x2015;
          </h2>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-transparent hover:bg-transparent  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hover:bg-gray-800 border-2"
            type="button"
            onClick={toggleDropdown}
          >
            Select Sector{"             "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>

        {/* Render dropdown only if dropdownVisible is true */}
        {dropdownVisible && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionSelect("Metals & Mining")}
                >
                  Metals & Mining
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionSelect("Construction")}
                >
                  Construction
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionSelect("Oil & Gas")}
                >
                  Oil & Gas
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionSelect("Chemicals")}
                >
                  Chemicals
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleOptionSelect("Renewable Energy")}
                >
                  Renewable Energy
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() =>
                    handleOptionSelect("Agriculture and Allied Sectors")
                  }
                >
                  Agriculture
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Render result based on selected option */}
        {selectedOption && renderResult()}
      </div>
      <div>
        <Clock />
      </div>
    </div>
  );
};

export default LandingClock;
