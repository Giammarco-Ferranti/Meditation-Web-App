import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "src/Layouts";
import BlogPost from "src/components/BlogPost";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogPost />
    </>
  );
};

export default BlogPage;
