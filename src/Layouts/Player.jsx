import React from "react";

import { useSelector } from "react-redux";

const Player = () => {
  // const songPlaying = useSelector((state) => state.player.value);
  // console.log(songPlaying.image);
  return (
    <div className="sticky bottom-0 left-0 flex flex-row justify-center items-center h-20 w-screen backdrop-blur-lg backdrop-brightness-95">
      <h1>hello</h1>
      {/* <img className="h-5" src={songPlaying.image} />
      <h1>{songPlaying.title}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
      <input type="range" /> */}
    </div>
  );
};

export default Player;
