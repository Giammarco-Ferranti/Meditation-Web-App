import React, { useRef } from "react";

import { useSelector } from "react-redux";

import CurrentTrack from "src/components/CurrentTrack";
import PlayerControls from "src/components/PlayerControls";

const Player = () => {
  const songPlaying = useSelector((state) => state.player.value);

  const audioRef = useRef();

  return (
    <>
      {songPlaying && (
        <div className="sticky bottom-0 left-0 flex flex-row justify-center items-center h-20 w-screen backdrop-blur-lg backdrop-brightness-95">
          <CurrentTrack audioRef={audioRef} />
          <PlayerControls audioRef={audioRef} />

          <input type="range" />
        </div>
      )}
    </>
  );
};

export default Player;
