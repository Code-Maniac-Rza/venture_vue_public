import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import BrandCarousel from "./BrandCarousel";
import SectorTab from "./SectorTab";
import LandingCarousel from "./LandingCarousel";
import LandingClock from "./LandingClock";
import LineChart from "../Charts/LineChart";
import { UserData } from "../Data/ChartsData";
import Initiative from "./Initiative";
import Footer from "./Footer";

import ChatAgent from "./ChatAgent";

const LandingPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch or set UserData here
    setUserData(UserData);
  }, []);

  if (!userData) {
    // Render loading state or return null
    return null;
  }

  return (
    <div className="bg-gray-900">
      <Hero />
      <BrandCarousel />

      <LandingCarousel />
      <div className="mt-7 mb-7">
        <LandingClock />
      </div>
      {userData && (
        <LineChart
          chartData={{
            labels: userData.map((data) => data.industry),
            datasets: [
              {
                label: "Industry Average",
                data: userData.map((data) => data.average),
                backgroundColor: [
                  "green",
                  "blue",
                  "red",
                  "yellow",
                  "orange",
                  "purple",
                  "pink",
                  "brown",
                  "gray",
                  "black",
                  "white",
                ],
                borderColor: "white",
                borderWidth: 1,
                datacolor: "white",
              },
            ],
          }}
        />
      )}
      <div className="bg-white mt-10 p-5">
        <Initiative />
      </div>
      <div>
        <ChatAgent />
      </div>
      <Footer />
      {/* {/* <SectorTab /> */}
    </div>
  );
};

export default LandingPage;
