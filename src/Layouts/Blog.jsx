import React from "react";
import { useQuery } from "react-query";
import getPosts from "src/Services/proxies/getPosts";

const Blog = () => {
  const { isLoading, isError, data, error } = useQuery(["comments"], getPosts);

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
        {data.map((comments) => {
          return (
            <div key={comments.id}>
              <div
                className="
           bg-slate-500
          h-40
          w-80
          "
              ></div>
              <h1>{comments.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
