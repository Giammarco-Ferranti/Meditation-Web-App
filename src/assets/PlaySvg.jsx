import React from "react";
import { useDispatch } from "react-redux";
import { active } from "src/Services/store/slicer/countDown";

const PlaySvg = () => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-green-200 border-2 border-green-400 rounded-full p-1 active:bg-green-200 hover:bg-green-100 duration-100">
      <svg
        onClick={() => dispatch(active(true))}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#4ade80"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PlaySvg;
