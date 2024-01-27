import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSoundModal } from "src/Services/store/slicer/countDown";

const StopTimerModal = ({ stopSound }) => {
  const open = useSelector((state) => state.countDown.soundModalOpen);
  const dispatch = useDispatch();
  if (!open) return null;
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
      <button
        onClick={() => {
          stopSound.current.pause();
          dispatch(openSoundModal(false));
        }}
        className="bg-red-200 border-2 border-red-400 rounded-full w-20 h-20 p-1 active:bg-red-200 hover:bg-red-100 duration-100 text-[#f87171]"
      >
        Stop
      </button>
    </div>
  );
};

export default StopTimerModal;
