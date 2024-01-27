import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  active,
  decrement,
  openModal,
} from "src/Services/store/slicer/countDown";
import timerSound from "../assets/sounds/timerSound.mp3";
import useSound from "use-sound";

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
        setInterval(() => {
          audioRef.current.play();
        }, 3000);
      }
    } else {
      clearInterval(interval);
      audioRef.current.pause();
    }
    return () => {
      clearInterval(interval);
    };
  }, [reduxFilter, reduxActive]);
  return (
    <div>
      <h1 onClick={() => dispatch(openModal(true))} className="text-4xl ">
        <span>{(minutes < 10 ? "0" : 0) + minutes}</span>:
        <span>{(seconds < 10 ? "0" : 0) + seconds}</span>
      </h1>
      <audio ref={audioRef} src={timerSound}></audio>
    </div>
  );
};

export default Countdown;
