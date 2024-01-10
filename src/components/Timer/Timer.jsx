import React, { useEffect, useState } from "react";
import ModalTimer from "./ModalTimer";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  console.log(minutes);
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
      <ModalTimer
        minutes={(value) => setMinutes(value)}
        seconds={(value) => setSeconds(value)}
        open={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <button>
        <span onClick={() => setOpenModal(true)}>{minutes}</span>:
        <span onClick={() => setOpenModal(true)}>{seconds}</span>
      </button>

      <button id="start">
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

        {/* <svg
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
          </svg> */}
      </button>
      <button>Reset</button>
    </div>
  );
};

export default Timer;
