import { minutesToMilliseconds } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  active,
  increment,
  openModal,
} from "src/Services/store/slicer/countDown";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" className="w-8"></input>
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default ModalTimer;
