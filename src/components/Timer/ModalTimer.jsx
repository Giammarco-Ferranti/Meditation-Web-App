import React, { useState } from "react";
import { minutesToMilliseconds, secondsToMilliseconds } from "date-fns";

const ModalTimer = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div>
      <input type="number" className="w-8"></input>
      <h1 onClick={closeModal}>x</h1>
    </div>
  );
};

export default ModalTimer;
