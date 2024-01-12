import { minutesToMilliseconds } from "date-fns";
import React, { useState } from "react";

const ModalTimer = ({ time, open, closeModal, active }) => {
  if (!open) return null;

  const handleSubmit = (e) => {
    const timeTarget = minutesToMilliseconds(+e.target[0].value);
    time(timeTarget);
    e.preventDefault();
    closeModal();
    active();
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
