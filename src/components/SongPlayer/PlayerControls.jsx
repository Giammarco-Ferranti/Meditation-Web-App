import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active } from "src/Services/store/slicer/songPlayer";
import PlaySvg from "src/assets/PlaySvg";
import StopSvg from "src/assets/StopSvg";

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
        <div onClick={() => dispatch(active(false))}>
          <StopSvg fill={"currentColor"} />
        </div>
      ) : (
        <div onClick={() => dispatch(active(true))}>
          <PlaySvg fill={"currentColor"} />
        </div>
      )}
    </>
  );
};

export default PlayerControls;
