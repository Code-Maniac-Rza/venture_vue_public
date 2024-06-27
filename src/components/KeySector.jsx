import React from "react";
import KeySectorCarousel from "./KeySectorCarousel";
import { StateData } from "../Data/StateData";

const KeySector = ({ stateId }) => {
  const stateInfo = StateData.find((data) => data.id === parseInt(stateId));

  return (
    <>
      <h4 className=" text-green-700 font-bold text-xl ml-3 mt-7">
        &#x2015;&#x2015; KEY SECTOR
      </h4>
      <div id="default-carousel" data-carousel="slide" class="relative w-full ">
        <div
          class="relative overflow-hidden h-full rounded-lg md:h-96"
          style={{ height: "36rem" }}
        >
          {stateInfo.keySectors.map((value, index) => {
            console.log(value);
            console.log(value.heading);
            if (value.heading === "") {
              return <></>;
            }
            return (
              <>
                <div className="demographic-container flex justify-evenly  mt-16">
                  <div className="demographic-image h-auto w-[150%] relative">
                    <div class="">
                      <div className="w-100 h-100 rounded-full flex absolute justify-center items-center bg-gradient-to-r from-green-300 via-green-500 to-green-800">
                        <div>
                          <div className="animate-none">
                            <img
                              src={value.mainImg}
                              className="rounded-full z-50 animate-none"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-28 h-28 bg-green-500 rounded-full absolute ml-16 mt-3 opacity-40 z-40">
                      {" "}
                    </div>

                    <div class="w-20 h-20 bg-green-300 opacity-85 rounded-full absolute ml-6 mt-5 z-30"></div>
                  </div>

                  <div className="demographic-text w-full md:w-full sm:w-full relative top-0 left-0 z-10 flex justify-center items-center">
                    <div className="flex justify-items-start text-center mt-[10%]">
                      <div className="mr-48">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="47"
                          className=""
                        >
                          <path
                            fill="green"
                            fillRule="evenodd"
                            d="M48.74 9.463L37.416 20.935a6.377 6.377 0 0 1-6.689 1.532l-2.853 3.257 14.583 13.112c.098.085.188.168.272.254 1.783 1.807 1.783 4.747-.001 6.555A4.534 4.534 0 0 1 39.493 47a4.534 4.534 0 0 1-3.485-1.63L23.334 30.905 10.661 45.37A4.534 4.534 0 0 1 7.176 47a4.531 4.531 0 0 1-3.236-1.356 4.634 4.634 0 0 1-1.34-3.277 4.638 4.638 0 0 1 1.611-3.531l10.391-9.342a.871.871 0 0 1 1.242.075.9.9 0 0 1-.074 1.258L5.373 40.176l-.015.012a2.855 2.855 0 0 0-.998 2.179c0 .762.293 1.478.825 2.017a2.794 2.794 0 0 0 4.141-.176l.012-.015 16.631-18.981.005-.005.004-.005 3.848-4.392a.87.87 0 0 1 1.037-.212 4.63 4.63 0 0 0 5.309-.923L47.496 8.203a.872.872 0 0 1 1.244 0 .898.898 0 0 1 0 1.26zM24.51 29.562l12.82 14.631.012.015a2.794 2.794 0 0 0 4.142.176 2.883 2.883 0 0 0-.174-4.196l-.014-.012-14.59-13.119-2.196 2.505zm12.389-13.73a.872.872 0 0 1-1.244 0 .9.9 0 0 1 0-1.261l9.123-9.241a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.26l-9.123 9.242zm-2.481-2.474a.87.87 0 0 1-1.244 0 .9.9 0 0 1 0-1.261l9.123-9.241a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.261l-9.123 9.241zm-4.842-.365a4.776 4.776 0 0 0-.911 5.377.9.9 0 0 1-.21 1.051l-7.834 7.044a.87.87 0 0 1-1.243-.075l-3.316-3.785c-3.408 1.754-7.546 1.114-10.294-1.67-2.729-2.764-4.65-5.967-5.408-9.016-.791-3.184-.263-5.914 1.488-7.688 1.751-1.773 4.445-2.308 7.588-1.507 3.011.768 6.172 2.714 8.901 5.479a9.05 9.05 0 0 1 1.648 10.427l3.349 3.012 3.485-3.134a6.58 6.58 0 0 1 1.513-6.776L39.656.26a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.261L29.576 12.993zm-11.289 6.494a.9.9 0 0 1-.165-1.134 7.26 7.26 0 0 0-1.03-8.89c-2.507-2.54-5.379-4.319-8.086-5.01-2.518-.642-4.619-.273-5.914 1.039-1.295 1.312-1.659 3.44-1.025 5.991.681 2.743 2.437 5.652 4.945 8.192 2.346 2.377 5.955 2.805 8.776 1.043a.872.872 0 0 1 1.12.167l3.202 3.655 1.899-1.707-3.722-3.346z"
                          ></path>
                        </svg>
                      </div>
                      <div className="right-side-text -ml-[50%] mb-5">
                        <div className=" text-3xl font-bold font-sans text-nowrap">
                          {value.heading}
                        </div>
                        <div className=" font-semibold mt-8 text-xl text-start justify-start">
                          {value.subHeading}
                        </div>
                        <div className="text-lg mt-6 text-start justify-start">
                          {value.description}
                        </div>

                        <div className="mt-7 text-start justify-start">
                          <button
                            type="button"
                            class="text-white bg-gradient-to-r from-pink-500 to-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[25%] h-12"
                          >
                            KNOW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default KeySector;
