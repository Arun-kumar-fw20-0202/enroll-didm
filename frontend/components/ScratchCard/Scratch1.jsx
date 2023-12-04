import React, { useRef } from "react";
import ScratchCard from "react-scratchcard-v2";

import IMG from "/landing/banenr.jpg";

export const ScratchCard1 = () => {
  const ref = useRef < ScratchCard > null;

  const onClickReset = () => {
    ref.current && ref.current.reset();
  };

  return (
    <div>
      <button onClick={onClickReset}>Reset</button>
      <ScratchCard width={320} height={226} image={IMG} finishPercent={80} onComplete={() => console.log("complete")}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Scratch card</h1>
        </div>
      </ScratchCard>
    </div>
  );
};
