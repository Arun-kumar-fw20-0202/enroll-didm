// components/ToolsMastery.js
import React from "react";

const ToolsMastery = () => {
  const logos = [
    "https://ads.didm.co.in/wp-content/uploads/2023/10/15.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/14.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/13.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/12.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/11.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/10.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/09.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/08.png", //
    "https://ads.didm.co.in/wp-content/uploads/2023/10/07.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/06.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/05.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/04.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/03.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/02.png",
    "https://ads.didm.co.in/wp-content/uploads/2023/10/01.png",
  ];

  return (
    <div className="p-4  flex justify-center medium:py-8 base:py-4 gap-8">
      <div className="base:w-[100%] medium:w-[80%]  text-center">
        <h1 className="base:text-[30px] medium:text-[40px] font-extrabold mb-4 text-[#af0606]">{"Tools You’ll Master"}</h1>
        <div className="grid mt-8 medium:grid-cols-5 base:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsMastery;
