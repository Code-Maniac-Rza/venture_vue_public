import { React, useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };
  return (
    <div>
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white font-bold text-5xl"
      >
        <div className="clock">
          <span>{convertToTwoDigit(time.hours)}:</span>
          <span>{convertToTwoDigit(time.minutes)}:</span>
          <span>{convertToTwoDigit(time.seconds)}</span>
          <span>{time.hours >= 12 ? " PM" : " AM"}</span>
        </div>
      </a>
    </div>
  );
};

export default Clock;
