import { useWindowSize } from "@react-hook/window-size";
import React, { useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import ScratchCard from "react-scratchcard";

export default function   ScratchCardComponent() {
  const { width, height } = useWindowSize();

  const [scratchedText, setScratchedText] = useState("");
  const [numberOfPieces, setnumberOfPieces] = useState(0);

  const handleScratchComplete = () => {
    setScratchedText(`You got ${discount}% Discount`);
    setnumberOfPieces(500);
    setTimeout(() => {
      setnumberOfPieces(0);
    }, 3000);
  };

  const settings = {
    width: 350,
    height: 350, // Set the height to 100% to make it dynamic
    image: "/landing/banenr.jpg",
    finishPercent: 30,
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
    <>
      <ReactConfetti numberOfPieces={numberOfPieces} config={config} />
      <div className="relative h-full responsive w-full overflow-hidden border ">
        <div className="w-full h-full flex justify-center items-center border rounded-md border-red-500">
          <ScratchCard {...settings}>
            {/* <h1 className="large:text-[50px] medium:text-[35px] base:text-[30px] small:text-[25px] font-extrabold"> */}
            {scratchedText}
            {/* </h1> */}
          </ScratchCard>
        </div>
      </div>
    </>
  );
}
