import { useQuery } from "react-query";

import { SoundCard } from "src/components/index";
import fetchData from "src/Services/proxies/fetchData";

const DB__URL = "http://localhost:3000";

const Cards = () => {
  const { isLoading, isError, data, error } = useQuery(
    ["sounds", DB__URL],
    () => fetchData(`${DB__URL}/sounds`)
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <main
      className=" 
      
      flex 
      flex-col
      items-center
      w-screen
      max-w-screen-md
      h-auto
      p-2
      m-10
      px-10
    "
    >
      <div
        className="
        block
        w-full
        sm:text-center
        xxs:text-center
        md:text-left
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
          .map((sound) => {
            return <SoundCard key={sound.id} sound={sound} />;
          })
          .slice(0, 6)}
      </div>
    </main>
  );
};

export default Cards;
