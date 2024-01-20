import React from "react";

const BlogCard = ({ comments }) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 cursor-pointer hover:opacity-80 active:opacity-100 truncate">
      <div className="w-64 h-36 bg-slate-300 rounded-md"></div>
      <div className="w-64 ">
        <h1 className="font-bold text-lg">{comments.title}</h1>
        <h3 className="font-normal text-base text-text-medium">
          {comments.text}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;