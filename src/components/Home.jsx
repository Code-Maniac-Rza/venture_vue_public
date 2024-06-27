import React, { useRef } from "react";
import { MdCall } from "react-icons/md";
import { StateData } from "../Data/StateData";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ stateId }) => {
  const stateInfo = StateData.find((data) => data.id === parseInt(stateId));
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7fvrqg8", "template_qpt1kta", form.current, {
        publicKey: "ilFozFvz3EFbHtaAQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // alert('Thank you for your Subscribing!');
          toast.success("Thank you for your Subscribing!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="home-container flex  justify-between gap-5 bg-gray-900">
        <div className="banner-text ml-5 w-full mt-5">
          <h4 className=" text-green-500 font-bold">
            &#x2015;&#x2015; {stateInfo.type}
          </h4>
          <h1 className=" text-gray-200 text-3xl mt-3">
            {stateInfo.stateName}
          </h1>
          <h3 className="text-gray-400 text-md text-wrap mt-2">
            {stateInfo.description}
          </h3>

          <div class="w-full max-w-md px-2  bg-white border border-gray-200 rounded-lg shadow sm:px-3 dark:bg-gray-800 dark:border-gray-700 mt-4">
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={stateInfo.personImage}
                        alt={stateInfo.personName}
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {stateInfo.personName}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-pink-700 rounded-full border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                        <MdCall />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="w-full max-w-sm p-2 lg:p-2.5 sm:p-6 md:p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-3
        "
          >
            <form
              class="w-full mb-5 max-w-lg mx-auto"
              ref={form}
              onSubmit={sendEmail}
            >
              <img
                src="https://www.investindia.gov.in/themes/investindia/image/svg_icon/email.svg"
                className="inline-block mr-3 mb-1.5"
              />
              <h1 class="font-medium text-gray-900 dark:text-white mb-3 mt-2 inline-block">
                Subscribe to India's Growth Story
              </h1>
              <div class="flex">
                <div class="relative w-full">
                  <input
                    name="emailTo"
                    type="email"
                    id="search-dropdown"
                    class="block p-2.5 w-full z-20 text-sm  text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                  <button
                    type="submit"
                    class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-pink-700 rounded-e-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  >
                    Subscribe
                  </button>
                  <span class="sr-only">Search</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="image flex items-end lg:w-[70%] relative top-0 left-0 text-right">
          <div>
            <img
              src={stateInfo.stateImage}
              alt=""
              className="w-full relative top-0 left-0 z-10"
            />
            <div className="text-right">
              <img
                src="	https://www.investindia.gov.in/themes/investindia/image/svg_shape/flower.svg"
                alt=""
                className="absolute top-0 left-0 float-right animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Home;
