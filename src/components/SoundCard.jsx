import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

const SoundCard = ({ sound }) => {
  const [play, { stop, duration }] = useSound(sound.sounds);

  const navigate = useNavigate();
  // const clickRoute = () => navigate("/player");

  return (
    <button
      className="bg-slate-50 w-min py-3 px-3 rounded-xl flex xxs:flex-row xs:flex-row sm:flex-col justify-center items-center text-left cursor-pointer hover:opacity-80 active:opacity-100"
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
      onClick={() => console.log(duration)}
    >
      <div className="relative flex justify-center items-center  xxs:h-20 xxs:w-20 sm:w-44 sm:h-44 rounded-md">
        <img
          draggable="false"
          src={sound.image}
          className="xxs:w-16 sm:w-20 md:w-32"
        />
      </div>

      <div className="xxs:pl-3 xxs:w-36 sm:w-44 sm:pt-2 sm:pl-0">
        <h1 className="font-bold text-lg">{sound.title}</h1>
        <h3 className="font-normal text-base text-text-medium truncate">
          {sound.description}
        </h3>
      </div>
    </button>
  );
};

export default SoundCard;
