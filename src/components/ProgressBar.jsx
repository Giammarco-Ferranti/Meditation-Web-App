import React, { useEffect, useRef } from "react";

const ProgressBar = ({ timeCurrentSong }) => {
  const clickRef = useRef();

  const checkWidth = (e) => {};

  return (
    <div
      ref={clickRef}
      onClick={checkWidth}
      className="absolute bottom-0 left-2 right-2 h-0.5 bg-black rounded-full w-auto "
    >
      <div
        className="bg-white h-0.5 rounded-full transition-all"
        style={{ width: `${timeCurrentSong + "%"}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
