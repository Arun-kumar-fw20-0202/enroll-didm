import React, { useState } from "react";
// import "./ScratchBox.css"; // Create a CSS file for styling

const ScratchBox = ({ discount }) => {
  const [isScratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <div className={`scratch-box ${isScratched ? "scratched" : ""}`} onClick={handleScratch}>
      <h1 className="text-2xl">{isScratched ? `You Got ${discount}%` : "Scratch Here"}</h1>
    </div>
  );
};

export default ScratchBox;
