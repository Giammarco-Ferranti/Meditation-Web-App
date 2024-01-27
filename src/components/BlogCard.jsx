import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setValue } from "src/Services/store/slicer/blogPost";

const BlogCard = ({ posts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        dispatch(setValue(posts));
        navigate("/blog");
      }}
      className=" flex flex-col justify-center items-center gap-3 cursor-pointer hover:opacity-80 active:opacity-100 truncate"
    >
      <div className="flex items-center justify-center w-64 h-36 bg-slate-50 rounded-md">
        <img draggable="false" src={posts.image} className="w-52" />
      </div>
      <div className="w-64 ">
        <h1 className="font-bold text-lg">{posts.title}</h1>
        <h3 className="font-normal text-base text-text-medium">{posts.text}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
