import { useDispatch } from "react-redux";
import { active } from "src/Services/store/slicer/songPlayer";

export default function handleStart(play) {
  const dispatch = useDispatch();
  dispatch(active(true));
  console.log(play);
}
