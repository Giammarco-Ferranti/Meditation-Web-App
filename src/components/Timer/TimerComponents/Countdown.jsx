import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active, decrement } from "../../../store/slicer/countDown";

const Countdown = () => {
  const reduxFilter = useSelector((state) => state.countDown.value);
  const reduxActive = useSelector((state) => state.countDown.isActive);
  const dispatch = useDispatch();
  const minutes = new Date(reduxFilter).getMinutes();
  const seconds = new Date(reduxFilter).getSeconds();

  useEffect(() => {
    let interval = null;

    if (reduxActive) {
      interval = setInterval(() => {
        reduxFilter > 0 && dispatch(decrement(reduxFilter));
        if (reduxFilter == 0) return dispatch(active(false));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [reduxFilter, reduxActive]);
  return (
    <div>
      <h1>
        <span>{minutes}</span>:<span>{seconds}</span>
      </h1>
    </div>
  );
};

export default Countdown;
