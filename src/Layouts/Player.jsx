import React from "react";

import { useSelector } from "react-redux";
import useSound from "use-sound";

const Player = () => {
  const songPlaying = useSelector((state) => state.player.value);
  const isActive = useSelector((state) => state.player.isActive);

  // const [play, { stop, duration }] = useSound(songPlaying.sounds);
  // console.log(songPlaying);
  // console.log(songPlaying);

  const [play, { stop, duration }] = useSound(() => {
    if (songPlaying) {
      return songPlaying.sounds;
    }
  });

  // const [play, { stop, duration }] = useSound(songPlaying.sounds);
  return (
    <>
      {songPlaying && (
        <div className="sticky bottom-0 left-0 flex flex-row justify-center items-center h-20 w-screen backdrop-blur-lg backdrop-brightness-95">
          <img className="h-5 bg-white" src={songPlaying.image} />
          <h1>{songPlaying.title}</h1>
          {isActive ? (
            <svg
              onClick={() => play()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          )}

          <input type="range" />
        </div>
      )}
    </>
  );
};

export default Player;
