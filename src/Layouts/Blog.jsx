import React from "react";
import { useQuery } from "react-query";
import fetchData from "src/Services/proxies/fetchData";
import BlogCard from "src/components/BlogCard";

const DB__URL = "http://localhost:3000";

const Blog = () => {
  const { isLoading, isError, data, error } = useQuery(
    ["comments", DB__URL],
    () => fetchData(`${DB__URL}/comments`)
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <div
      className="
      container
     flex 
      flex-col
      items-center
      w-screen
      h-auto
      p-2
      m-5


    "
    >
      <h1
        className="
      text-2xl
      font-semibold
      mb-12
      "
      >
        Posts
      </h1>

      <div
        className="
      grid
      grid-cols-1
      gap-8
      sm:grid-cols-2
      "
      >
        {data.map((comments) => {
          return <BlogCard key={comments.id} comments={comments} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
