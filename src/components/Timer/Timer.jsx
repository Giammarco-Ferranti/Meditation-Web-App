import React, { useEffect, useState } from "react";
import ModalTimer from "./ModalTimer";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const minutes = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        time > 0 && setTime(time - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, isActive]);
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
      <h1>
        <span>{minutes}</span>:<span>{seconds}</span>
      </h1>
      <ModalTimer
        time={(n) => setTime(n)}
        open={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <button onClick={() => setOpenModal(true)}>
        <span>+</span>
      </button>

      <button id="start">
        {!isActive ? (
          <svg
            onClick={startTimer}
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
        ) : (
          <svg
            onClick={stopTimer}
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
        )}
      </button>
      <button
        onClick={() => {
          setTime(0);
          setIsActive(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
