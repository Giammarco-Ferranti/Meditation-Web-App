import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTimer(timer - 1), 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTimer(0);
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div
      className="
      cursor-pointer
    flex 
      flex-row
      gap-7
      items-center
      w-screen
      h-20
      p-2
      border-red-400
      border-2
      w-auto
      xs:max-w-screen-xs 
      sm:max-w-screen-sm 
      md:max-w-screen-md 
      lg:max-w-screen-lg 
      xl:max-w-screen-xl 
      2xl:max-w-screen-2xl
    "
    >
      {/* <h1
        className="
      text-2xl
      "
      >
        {timer}
      </h1> */}
      {/* <select
        className="hidden"
        onChange={(e) => setTimer(e.target.value)}
        value={timer}
      >
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select> */}

      <Countdown date={Date.now() + 5000} renderer={renderer} />
      <input
        type="time"
        className="
        border-gray-700
         border-2
         "
        onChange={(e) => console.log(e.target.value)}
      ></input>
      <button id="start" onClick={startAndStop}>
        {isRunning ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        )}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
