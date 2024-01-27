import React from "react";
import { useQuery } from "react-query";
import fetchData from "src/Services/proxies/fetchData";
import { BlogCard } from "src/components/index";

const DB__URL = "http://localhost:3000";

const Blog = () => {
  const { isLoading, isError, data, error } = useQuery(["posts", DB__URL], () =>
    fetchData(`${DB__URL}/posts`)
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <div
      className="
      
     flex 
      flex-col
      items-center
      w-screen
      max-w-screen-md
      h-auto
      px-10
      m-5
    mb-20

    "
    >
      <h1
        className="
        w-full
        sm:text-center
        xxs:text-center
        md:text-left
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
      gap-10
      sm:grid-cols-2
      "
      >
        {data.map((posts) => {
          return <BlogCard value={posts.id} key={posts.id} posts={posts} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
