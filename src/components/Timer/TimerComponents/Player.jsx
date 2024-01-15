import { useSelector, useDispatch } from "react-redux";
import { active, increment, openModal } from "../../../store/slicer/countDown";

const Player = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-7">
      <button onClick={() => dispatch(openModal(true))}>
        <span>+</span>
      </button>
      <button id="start">
        {!useSelector((state) => state.countDown.isActive) ? (
          <svg
            onClick={() => dispatch(active(true))}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => dispatch(active(false))}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
            />
          </svg>
        )}
      </button>
      <button
        onClick={() => {
          dispatch(openModal(true));
          dispatch(increment(0));
          dispatch(active(false));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Player;
