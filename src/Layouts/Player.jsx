import React, { useRef } from "react";

import { useSelector } from "react-redux";

import CurrentTrack from "src/components/CurrentTrack";
import PlayerControls from "src/components/PlayerControls";
import ProgressBar from "src/components/ProgressBar";

const Player = () => {
  const songPlaying = useSelector((state) => state.player.value);

  const audioRef = useRef();
  console.log(audioRef);
  return (
    <>
      {songPlaying && (
        <div className="sticky bottom-3 left-0 flex flex-row justify-center items-center cursor-pointer w-screen max-w-screen-md">
          <div className="relative flex flex-row justify-between items-center h-12 md:h-16 w-full max-w-screen-md mx-10 px-5 rounded-md backdrop-blur-lg backdrop-brightness-95">
            <CurrentTrack audioRef={audioRef} />
            <PlayerControls audioRef={audioRef} />
            <ProgressBar audioRef={audioRef} />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
