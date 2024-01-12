import React, { useState } from "react";

const ModalTimer = ({ time, open, closeModal }) => {
  if (!open) return null;

  return (
    <div>
      <input
        type="number"
        className="w-8"
        onChange={(e) => console.log(+e.target.value)}
      ></input>
      <h1 onClick={closeModal}>x</h1>
    </div>
  );
};

export default ModalTimer;
