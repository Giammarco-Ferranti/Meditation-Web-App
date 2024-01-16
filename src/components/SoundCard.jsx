import React from "react";

const SoundCard = ({ todo }) => {
  return (
    <div className="bg-slate-50  w-auto py-3 px-5 rounded-md flex xxs:flex-row sm:flex-col justify-center items-center text-left">
      <div className="bg-slate-200 xxs:h-20 xxs:w-20 sm:w-44 sm:h-44 rounded-md"></div>
      <div className="xxs:pl-3 sm:w-44 sm:pt-2 sm:pl-0">
        <h1 className="font-bold text-lg">{todo.title}</h1>
        <h3 className="font-normal text-base text-text-medium truncate">
          {todo.description}
        </h3>
      </div>
    </div>
  );
};

export default SoundCard;
