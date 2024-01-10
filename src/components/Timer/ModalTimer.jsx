import React, { useState } from "react";

const ModalTimer = ({ minutes, seconds, open, closeModal }) => {
  const values = [];

  for (var i = 1; i <= 59; i++) {
    values.push(i);
  }

  console.log(values);
  const [minutesValue, setMinutesValue] = useState(null);
  const [secondsValue, setSecondsValue] = useState(null);
  // console.log(+value);
  minutes(+minutesValue);
  seconds(+secondsValue);

  if (!open) return null;
  return (
    <div>
      {values.map((n) => {
        return (
          <button
            onClick={(e) => {
              setMinutesValue(e.currentTarget.innerHTML);
              closeModal();
            }}
          >
            {n}
          </button>
        );
      })}
      {values.map((n) => {
        return (
          <button
            onClick={(e) => {
              setSecondsValue(e.currentTarget.innerHTML);
              closeModal();
            }}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
};

export default ModalTimer;
