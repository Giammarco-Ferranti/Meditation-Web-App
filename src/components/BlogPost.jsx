import React from "react";
import { useSelector } from "react-redux";

const BlogPost = () => {
  const blog = useSelector((state) => state.blog.value);
  console.log(blog);
  if (!blog) return null;
  return (
    <div
      className=" flex 
      flex-col
      items-center
      w-screen
      max-w-screen-md
      h-auto
      p-2
      px-10"
    >
      <div className=" w-60">
        <img src={blog.image} alt="Blog Image" />
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-2xl font-bold text-left">{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
