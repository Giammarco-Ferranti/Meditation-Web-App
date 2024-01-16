import React from "react";
import { useDispatch } from "react-redux";
import { active } from "src/Services/store/slicer/countDown";

const StopSvg = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" bg-red-200 border-2 border-red-400 rounded-full p-1 active:bg-red-200 hover:bg-red-100 duration-100">
        <svg
          onClick={() => dispatch(active(false))}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#f87171"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export default StopSvg;
