import { useSelector, useDispatch } from "react-redux";
import {
  active,
  increment,
  openModal,
} from "src/Services/store/slicer/countDown";
import PlaySvg from "src/assets/PlaySvg";
import StopSvg from "src/assets/StopSvg";

const TimePlayer = () => {
  return (
    <div className="flex flex-row gap-7">
      <button id="start">
        {!useSelector((state) => state.countDown.isActive) ? (
          <PlaySvg />
        ) : (
          <StopSvg />
        )}
      </button>
    </div>
  );
};

export default TimePlayer;
