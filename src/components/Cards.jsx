import React from "react";

const Cards = () => {
  return (
    <main
      className=" 
      flex 
      flex-col
      items-center
      w-screen
      h-auto
      p-2
      m-5
      border-red-400
      border-2
      w-auto
      xs:max-w-screen-xs 
      sm:max-w-screen-sm 
      md:max-w-screen-md 
      lg:max-w-screen-lg 
      xl:max-w-screen-xl 
      2xl:max-w-screen-2xl
    "
    >
      <h1
        className="
      text-2xl
      font-semibold
      text-left
      block
      mb-5
    
      "
      >
        Sounds
      </h1>

      <div
        id="gridCard__section"
        className="
      grid
      grid-cols-2
      gap-y-5
      gap-x-20
      md:grid-cols-3
      "
      >
        <div>
          <div
            className="
          bg-slate-500
          h-20
          "
          ></div>
          <h1>Hello World</h1>
        </div>
        <div>
          <div
            className="
          bg-slate-500
          h-20
          bord
          "
          ></div>
          <h1>Hello World</h1>
        </div>
        <div>
          <div
            className="
          bg-slate-500
          h-20
          bord
          "
          ></div>
          <h1>Hello World</h1>
        </div>
        <div>
          <div
            className="
          bg-slate-500
          h-20
          bord
          "
          ></div>
          <h1>Hello World</h1>
        </div>
        <div>
          <div
            className="
          bg-slate-500
          h-20
          bord
          "
          ></div>
          <h1>Hello World</h1>
        </div>
        <div>
          <div
            className="
          bg-slate-500
          h-20
          bord
          "
          ></div>
          <h1>Hello World</h1>
        </div>
      </div>
    </main>
  );
};

export default Cards;
