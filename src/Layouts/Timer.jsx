import { Countdown, ModalTimer, TimePlayer } from "src/components";

const Timer = () => {
  return (
    <div className="w-72 md:w-96 cursor-pointer px-5 flex flex-row gap-7 justify-between items-center h-20 p-2 bg-slate-100 border-2 rounded-3xl">
      <Countdown />
      <ModalTimer />
      <TimePlayer />
    </div>
  );
};

export default Timer;
