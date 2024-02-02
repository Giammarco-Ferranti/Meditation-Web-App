import { SoundCard } from "src/components/index";

const Cards = () => {
  const sounds = [
    {
      id: "1",
      title: "Wind",
      description: "Windy sounds",
      image: "images/wind.png",
      sounds: "sounds/windSound.mp3",
    },
    {
      id: "2",
      title: "Ocean",
      description: "Ocean sounds",
      image: "images/ocean.png",
      sounds: "sounds/oceanSound.mp3",
    },
    {
      id: "3",
      title: "Rain",
      description: "Rain sounds",
      image: "images/rain.png",
      sounds: "sounds/rainSound.mp3",
    },
    {
      id: "4",
      title: "Forest",
      description: "Forest sounds",
      image: "images/forest.png",
      sounds: "sounds/forestSound.mp3",
    },
    {
      id: "5",
      title: "City",
      description: "City sounds",
      image: "images/city.png",
      sounds: "sounds/citySound.mp3",
    },
    {
      id: "6",
      title: "Desert",
      description: "Desert sounds",
      image: "images/desert.png",
      sounds: "sounds/desertSound.mp3",
    },
    {
      id: "7",
      title: "Alps",
      description: "Alps sounds",
    },
    {
      id: "8",
      title: "Orcas",
      description: "Orcas sounds",
    },
    {
      id: "9",
      title: "Fire",
      description: "Fire sounds",
    },
  ];

  return (
    <main className="flex flex-col items-center w-screen max-w-screen-md h-auto p-2 m-10 px-10">
      <div className="block w-full sm:text-center xxs:text-center md:text-left mb-12">
        <h1 className="text-2xl font-semibold">Sounds for you</h1>
      </div>

      <div
        id="gridCard__section"
        className="grid sm:grid-cols-2 gap-y-5 gap-x-10 xxs:grid-cols-1 md:grid-cols-3"
      >
        {sounds
          .map((sound) => {
            return <SoundCard key={sound.id} sound={sound} />;
          })
          .slice(0, 6)}
      </div>
    </main>
  );
};

export default Cards;
