import { minutesToMilliseconds } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  active,
  increment,
  openModal,
} from "src/Services/store/slicer/countDown";
import checkKeyDown from "src/helpers/checkKeyDown";

const ModalTimer = () => {
  const reduxModal = useSelector((state) => state.countDown.modalOpen);
  const dispatch = useDispatch();
  if (!reduxModal) return null;

  const handleSubmit = (e) => {
    const timeTarget = minutesToMilliseconds(+e.target[0].value);
    dispatch(increment(timeTarget));
    e.preventDefault();
    dispatch(openModal(false));
    dispatch(active(true));
  };

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      className=" flex w-full max-h-full h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center"
    >
      <div className="py-5 flex flex-col gap-5 w-60 h-fit rounded-lg bg-white items-center justify-center">
        <header className="flex items-start w-full pl-6">
          <h3 className="text-lg font-bold text-left">Timer</h3>
        </header>
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => checkKeyDown(e)}
          noValidate
          className="group flex flex-col items-center justify-center gap-2 "
        >
          <label htmlFor="number">
            <input
              name="number"
              type="number"
              min="1"
              max="60"
              placeholder="Number"
              required
              className="peer bg-slate-200 rounded-md w-32 h-10 border-none text-center font-bold placeholder:text-text-medium placeholder:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            ></input>
            <span className="mt-2 p-2 hidden text-sm max-w-44 bg-red-100 rounded-md text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a number between 1 and 60
            </span>
          </label>
          <button
            className="bg-blue-600 text-white w-full h-10 px-3 rounded-md hover:opacity-80 active:opacity-100 group-invalid:pointer-events-none group-invalid:opacity-30 group-invalid:pointer-events-none group-invalid:opacity-30"
            type="submit"
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalTimer;
