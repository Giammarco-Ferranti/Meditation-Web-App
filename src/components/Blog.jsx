import React from "react";

const Blog = () => {
  return (
    <div
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
      mb-3
      "
      >
        Posts
      </h1>

      <div
        className="
      grid
      grid-cols-1
      "
      >
        <div>
          <div
            className="
           bg-slate-500
          h-40
          w-80
          "
          ></div>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
