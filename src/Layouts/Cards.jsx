import { useQuery } from "react-query";

import SoundCard from "src/components/SoundCard";
import fetchData from "src/Services/proxies/fetchData";

const DB__URL = "http://localhost:3000";

const Cards = () => {
  const { isLoading, isError, data, error } = useQuery(["posts", DB__URL], () =>
    fetchData(`${DB__URL}/posts`)
  );

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
      <div
        className="
        block
        text-center
        mb-12
        "
      >
        <h1
          className="
      text-2xl
      font-semibold    
      "
        >
          Sounds for you
        </h1>
      </div>

      <div
        id="gridCard__section"
        className="
      grid
     
      sm:grid-cols-2
      gap-y-5
      gap-x-10
      xxs:grid-cols-1  
      md:grid-cols-3
      
      "
      >
        {data
          .map((todo) => {
            return <SoundCard key={todo.id} todo={todo} />;
          })
          .slice(0, 6)}
      </div>
    </main>
  );
};

export default Cards;
