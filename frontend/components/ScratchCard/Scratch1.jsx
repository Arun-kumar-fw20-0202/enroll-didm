import Image from "next/image";
import React, { useState } from "react";
// import "./ScratchBox.css"; // Create a CSS file for styling

const ScratchBox = ({ discount, setScratched, isScratched }) => {
  return (
    <div className={`scratch-box relative`} onClick={() => setScratched(true)}>
      <Image fill className={`${isScratched && "active"} absolute top-0 `} src={"/landing/banenr.jpg"} />
      <div className={`${isScratched && "scratched"}`}>
        <h1 className="text-2xl">{isScratched ? `You Got ${discount}% off` : "Scratch Here"}</h1>
      </div>
    </div>
  );
};

export default ScratchBox;
