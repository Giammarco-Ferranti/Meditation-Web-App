import { Player, Countdown, ModalTimer } from "./TimerComponents";
const Timer = () => {
  return (
    <div
      className="cursor-pointer flex flex-row gap-7 items-center w-screen h-20 p-2 border-red-400 border-2 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md 
                lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <Countdown />
      <ModalTimer />
      <Player />
    </div>
  );
};

export default Timer;
