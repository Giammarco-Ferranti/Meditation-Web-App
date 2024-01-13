import React, { useEffect, useState } from "react";
import ModalTimer from "./ModalTimer";
import { useDispatch, useSelector } from "react-redux";
import {
  active,
  decrement,
  increment,
  openModal,
} from "../../redux/slicer/countDown";

const Timer = () => {
  const reduxFilter = useSelector((state) => state.countDown.value);
  const reduxActive = useSelector((state) => state.countDown.isActive);
  const reduxModal = useSelector((state) => state.countDown.modalOpen);
  const dispatch = useDispatch();
  const minutes = new Date(reduxFilter).getMinutes();
  const seconds = new Date(reduxFilter).getSeconds();

  useEffect(() => {
    let interval = null;

    if (reduxActive) {
      interval = setInterval(() => {
        reduxFilter > 0 && dispatch(decrement(reduxFilter));
        if (reduxFilter == 0) return dispatch(active(false));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [reduxFilter, reduxActive]);
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
      // time={(n) => setTime(n)}
      // open={openModal}
      // closeModal={() => setOpenModal(false)}
      />
      <button onClick={() => dispatch(openModal(true))}>
        <span>+</span>
      </button>

      <button id="start">
        {!reduxActive ? (
          <svg
            onClick={() => dispatch(active(true))}
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
            onClick={() => dispatch(active(false))}
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
          dispatch(openModal(true));
          dispatch(increment(0));
          dispatch(active(false));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
