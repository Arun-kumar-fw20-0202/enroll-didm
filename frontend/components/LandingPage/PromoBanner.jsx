// components/PromoBanner.js
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-[#af0606] w-[100%] text-white base:p-2 medium:p-8 text-center medium:py-8 base:py-[50px] flex flex-col items-center gap-5">
      <div>
        <p className="medium:text-lg base:text-md">{`Our master’s courses will provide you with the skills and knowledge you need to specialize in your field and achieve success in your career.`}</p>
        <p className="medium:text-lg base:text-md mt-4">{`Scratch Now: Upon applying, click on the Scratch Now button and reveal your unique coupon code. This code will grant you the discounted price on your course fees.`}</p>
      </div>
      <div className="relative w-full">
        <Image
          src="https://ads.didm.co.in/wp-content/uploads/2023/11/FIVDFGD.png"
          alt="Promo Banner"
          layout="responsive"
          width={200}
          height={133} // You may need to adjust this based on the image aspect ratio
          className="w-full h-auto object-cover md:w-[66.66%] lg:w-[50%] xl:w-[33.33%]"
        />
      </div>
      {/* <Button color="blue">GRAB IT FAST</Button> */}
      <Link href={"/enroll_course"}>
        <Button className="bg-[#ee3131] px-10 text-white p-6 shadow-md rounded-md">GRAB IT FAST</Button>
      </Link>
    </div>
  );
};

export default PromoBanner;
