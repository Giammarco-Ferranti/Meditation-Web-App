import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  active,
  decrement,
  openModal,
  openSoundModal,
} from "src/Services/store/slicer/countDown";

import StopTimerModal from "./StopTimerModal";

const Countdown = () => {
  const reduxFilter = useSelector((state) => state.countDown.value);
  const reduxActive = useSelector((state) => state.countDown.isActive);
  const dispatch = useDispatch();
  const minutes = new Date(reduxFilter).getMinutes();
  const seconds = new Date(reduxFilter).getSeconds();
  const audioRef = useRef();

  useEffect(() => {
    let interval = null;

    if (reduxActive) {
      interval = setInterval(() => {
        reduxFilter > 0 && dispatch(decrement(reduxFilter));
      }, 1000);
      if (reduxFilter == 0) {
        dispatch(active(false));
        dispatch(openSoundModal(true));
        audioRef.current.play();
      }
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [reduxFilter, reduxActive]);
  return (
    <div className="relative">
      <h1 onClick={() => dispatch(openModal(true))} className="text-4xl ">
        <span>{(minutes < 10 ? "0" : 0) + minutes}</span>:
        <span>{(seconds < 10 ? "0" : 0) + seconds}</span>
      </h1>
      <audio ref={audioRef} src={"sounds/timerSound.mp3"}></audio>
      <StopTimerModal stopSound={audioRef} />
    </div>
  );
};

export default Countdown;
