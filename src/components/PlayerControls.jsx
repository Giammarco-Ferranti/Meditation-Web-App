import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active } from "src/Services/store/slicer/songPlayer";

const PlayerControls = ({ audioRef }) => {
  const isActive = useSelector((state) => state.player.isActive);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isActive, audioRef]);

  return (
    <>
      {isActive ? (
        <svg
          onClick={() => dispatch(active(false))}
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
          onClick={() => dispatch(active(true))}
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
    </>
  );
};

export default PlayerControls;
