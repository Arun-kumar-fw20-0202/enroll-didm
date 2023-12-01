import { useWindowSize } from "@react-hook/window-size";
import React, { useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import ScratchCard from "react-scratchcard";

export default function ScratchCardComponent() {
  const { width, height } = useWindowSize();
  const [scratchedText, setScratchedText] = useState("");
  const confetiRef = useRef(null);
  const [numberOfPieces, setnumberOfPieces] = useState(0);

  const handleScratchComplete = () => {
    setScratchedText("25%");
    setnumberOfPieces(500);
    setTimeout(() => {
      setnumberOfPieces(0);
    }, 1000);
  };

  const settings = {
    width: 500,
    height: 500,
    image: "/landing/banenr.jpg",
    finishPercent: 50,
    onComplete: handleScratchComplete,
  };
  const config = {
    angle: "10",
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: "10000",
    stagger: "9",
    width: "45550px",
    height: "10px",
    perspective: "605px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <div className=" ">
        <ReactConfetti width={width} height={height} numberOfPieces={numberOfPieces} config={config} />
      </div>
      {/*  */}
      <div className=" w-full flex justify-center items-center overflow-hidden">
        <ScratchCard {...settings}>
          <div className="flex items-center justify-center border border-red-500 h-[500px] text-center p-3 w-[500px]">
            <h1 className="text-[50px] font-extrabold">You Got {scratchedText} Discount</h1>
          </div>
        </ScratchCard>
      </div>
    </div>
  );
}
