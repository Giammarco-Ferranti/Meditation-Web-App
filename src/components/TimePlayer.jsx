import { useSelector, useDispatch } from "react-redux";
import { active } from "src/Services/store/slicer/countDown";
import PlaySvg from "src/assets/PlaySvg";
import StopSvg from "src/assets/StopSvg";

const TimePlayer = () => {
  const dispatch = useDispatch();
  const playColor = "#4ade80";
  const stopColor = "#f87171";
  return (
    <div className="flex flex-row gap-7">
      <button id="start">
        {!useSelector((state) => state.countDown.isActive) ? (
          <div
            onClick={() => dispatch(active(true))}
            className="bg-green-200 border-2 border-green-400 rounded-full p-1 active:bg-green-200 hover:bg-green-100 duration-100"
          >
            <PlaySvg fill={playColor} />
          </div>
        ) : (
          <div
            onClick={() => dispatch(active(false))}
            className="bg-red-200 border-2 border-red-400 rounded-full p-1 active:bg-red-200 hover:bg-red-100 duration-100"
          >
            <StopSvg fill={stopColor} />
          </div>
        )}
      </button>
    </div>
  );
};

export default TimePlayer;
