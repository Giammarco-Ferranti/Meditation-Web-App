import React, { useEffect } from "react";

const ProgressBar = ({ audioRef }) => {
  // useEffect(() => {
  //   if (audioRef) {
  //     console.log(audioRef.current.duration());
  //     console.log(audioRef.current.currenTime());
  //   } else {
  //     null;
  //   }
  // }, [audioRef]);
  // if (audioRef) {
  //   const duration = audioRef.current.duration;
  //   console.log(duration);

  // }
  return (
    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-black rounded-full w-auto ">
      <div className="bg-white h-0.5 rounded-full w-[20%]"></div>
    </div>
  );
};

export default ProgressBar;
