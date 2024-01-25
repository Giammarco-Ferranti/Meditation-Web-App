import React from "react";
import { useSelector } from "react-redux";

const CurrentTrack = ({ audioRef, onPlaying }) => {
  const songPlaying = useSelector((state) => state.player.value);
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <h1 className="font-bold text-base">{songPlaying.title}</h1>
      <audio
        src={songPlaying.sounds}
        ref={audioRef}
        autoPlay
        onTimeUpdate={onPlaying}
      ></audio>
    </div>
  );
};

export default CurrentTrack;
