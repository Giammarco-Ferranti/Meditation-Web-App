import React, { useEffect } from "react";
import { useQuery } from "react-query";
import getSounds from "src/Services/proxies/getSounds";
import SoundCard from "src/components/SoundCard";

const Cards = () => {
  const { isLoading, isError, data, error } = useQuery(["posts"], getSounds);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <main
      className=" 
      container
      flex 
      flex-col
      items-center
      w-screen
      h-auto
      p-2
      m-10
      
    "
    >
      <div className="container pb-3">
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
      </div>

      <div
        id="gridCard__section"
        className="
      grid
      sm:grid-cols-2
      gap-y-5
      gap-x-20
      md:grid-cols-3
      "
      >
        {data
          .map((todo) => {
            return <SoundCard key={todo.id} todo={todo} />;
          })
          .slice(0, 9)}
      </div>
    </main>
  );
};

export default Cards;
