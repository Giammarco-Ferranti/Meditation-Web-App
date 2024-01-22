import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setValue } from "src/Services/store/slicer/songPlayer";
import useSound from "use-sound";

const SoundCard = ({ sound }) => {
  const dispatch = useDispatch();
  const [play, { stop, duration }] = useSound(sound.sounds);
  const minutes = new Date(duration).getMinutes();
  const seconds = new Date(duration).getSeconds();

  const navigate = useNavigate();
  // const clickRoute = () => navigate("/player");

  return (
    <button
      className="bg-slate-50 w-min py-3 px-3 rounded-xl flex xxs:flex-row xs:flex-row sm:flex-col justify-center items-center text-left cursor-pointer hover:opacity-80 active:opacity-100"
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
      onClick={() => dispatch(setValue(sound))}
    >
      <div className="relative flex justify-center items-center  xxs:h-20 xxs:w-20 sm:w-44 sm:h-44 rounded-md">
        <img
          draggable="false"
          src={sound.image}
          className="xxs:w-16 sm:w-20 md:w-32"
        />
      </div>

      <div className="flex flex-col xxs:pl-3 xxs:w-36 sm:w-44 sm:pt-2 sm:pl-0">
        <div className="flex flex-row justify-start items-center gap-3">
          <h1 className="font-bold text-lg">{sound.title}</h1>
          <p className="text-emerald-500">
            <span>{(minutes < 10 ? "0" : 0) + minutes}</span>:
            <span>{(seconds < 10 ? "0" : 0) + seconds}</span>
          </p>
        </div>
        <h3 className="font-normal text-base text-text-medium truncate">
          {sound.description}
        </h3>
      </div>
    </button>
  );
};

export default SoundCard;
