import React, { useRef } from "react";

const ProgressBar = ({ timeCurrentSong, audioRef }) => {
  const clickRef = useRef();

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;

    audioRef.current.currentTime =
      (divProgress / 100) * audioRef.current.duration;
  };

  return (
    <div
      ref={clickRef}
      onClick={checkWidth}
      className="hover:h-1 *:hover:h-1 hover:transition-all absolute bottom-0 left-2 right-2 h-0.5 bg-black rounded-full w-auto "
    >
      <div
        className=" h-0.5 bg-white  rounded-full transition-all"
        style={{ width: `${timeCurrentSong + "%"}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
