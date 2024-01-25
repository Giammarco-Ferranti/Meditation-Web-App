import React from "react";
import { useSelector } from "react-redux";

const CurrentTrack = ({ audioRef }) => {
  const songPlaying = useSelector((state) => state.player.value);
  return (
    <>
      <img className="h-5 bg-white" src={songPlaying.image} />
      <h1>{songPlaying.title}</h1>
      <audio src={songPlaying.sounds} ref={audioRef} autoPlay></audio>
    </>
  );
};

export default CurrentTrack;
