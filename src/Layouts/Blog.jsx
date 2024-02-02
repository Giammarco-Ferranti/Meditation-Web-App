import React from "react";
import { useQuery } from "react-query";
import fetchData from "src/Services/proxies/fetchData";
import { BlogCard, MessageError, Spinner } from "src/components/index";

const Blog = () => {
  const { isLoading, isError, data } = useQuery(
    ["posts", import.meta.env.VITE_DB__URL],
    () => fetchData(`${import.meta.env.VITE_DB__URL}/posts`)
  );

  if (isLoading) return <Spinner />;
  if (isError) return <MessageError />;

  return (
    <div className="flex flex-col items-center w-screen max-w-screen-md h-auto px-10 m-5 mb-20 ">
      <h1 className="w-full sm:text-center xxs:text-center md:text-left text-2xl font-semibold mb-12">
        Posts
      </h1>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {data.map((posts) => {
          return <BlogCard value={posts.id} key={posts.id} posts={posts} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
