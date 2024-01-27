import React, { useRef, useState } from "react";

import { useSelector } from "react-redux";

import {
  CurrentTrack,
  PlayerControls,
  ProgressBar,
} from "src/components/index";

const Player = () => {
  const songPlaying = useSelector((state) => state.player.value);
  const [timeCurrentSong, setTimeCurrentSong] = useState(0);

  const audioRef = useRef();
  // console.log(audioRef);

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    setTimeCurrentSong((currentTime / duration) * 100);
    // console.log(duration, currentTime);
  };

  // console.log(timeCurrentSong);
  return (
    <>
      {songPlaying && (
        <div className="sticky bottom-3 left-0 flex flex-row justify-center items-center cursor-pointer w-screen max-w-screen-md">
          <div className="relative flex flex-row justify-between items-center h-12 md:h-16 w-full max-w-screen-md mx-10 px-5 rounded-md backdrop-blur-lg backdrop-brightness-95">
            <CurrentTrack audioRef={audioRef} onPlaying={onPlaying} />
            <PlayerControls audioRef={audioRef} />
            <ProgressBar
              timeCurrentSong={timeCurrentSong}
              audioRef={audioRef}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
