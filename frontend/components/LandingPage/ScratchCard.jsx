import generateDiscount from "@/core/GenerateDiscount";
import { useDisclosure } from "@nextui-org/react";
import { useWindowSize } from "@react-hook/window-size";
import React, { useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import ScratchCard from "react-scratchcard";

export default function ScratchCardComponent() {
  const { width, height } = useWindowSize();

  const [scratchedText, setScratchedText] = useState("");
  const [numberOfPieces, setnumberOfPieces] = useState(0);

  const handleScratchComplete = () => {
    setScratchedText(`You got ${generateDiscount()}% Discount`);
    setnumberOfPieces(500);
    setTimeout(() => {
      setnumberOfPieces(0);
    }, 1000);
  };

  const settings = {
    width: 500,
    height: 250, // Set the height to 100% to make it dynamic
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
    <>
      <ReactConfetti numberOfPieces={numberOfPieces} config={config} />
      <div className="relative h-full w-full overflow-hidden">
        <div className="w-full h-full text-center border rounded-md border-gray-500">
          <ScratchCard className="border boder-black" {...settings}>
            <div>
              <h1 className="text-[50px] font-extrabold">{scratchedText}</h1>
            </div>
          </ScratchCard>
        </div>
      </div>
    </>
  );
}
