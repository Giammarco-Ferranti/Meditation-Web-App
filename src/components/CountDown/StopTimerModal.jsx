import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSoundModal } from "src/Services/store/slicer/countDown";

const StopTimerModal = ({ stopSound }) => {
  const open = useSelector((state) => state.countDown.soundModalOpen);
  const dispatch = useDispatch();
  if (!open) return null;
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      className="flex w-full max-h-full h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center "
    >
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
