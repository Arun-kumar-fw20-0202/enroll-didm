import { NavDrawer } from "@/core/NavDrawer";
import SecondNav from "@/core/SecondNav";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

let navLink1 = [
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "News & Events",
    link: "/news_events",
  },
  {
    name: "Franchise",
    link: "/franchise",
  },
  {
    name: "Careers",
    link: "/careers",
  },
];

let navLink2 = [
  {
    name: "info@didm.in",
    // link: "/blogs",
    icon: MdOutlinePhone,
  },
  {
    name: "+91 8800505151",
    // link: "/news_events",
    icon: MdOutlineMailOutline,
  },
];

let navLink3 = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Training",
    link: "/",
  },
  {
    name: "Select Centers",
    link: "/",
  },
  {
    name: "Resources",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];
const MobileNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [leftDrawer, setLeftDrawer] = useState(false);

  const handleTheCloseLeftDrawer = () => {
    console.log("called");
    setLeftDrawer(false);
  };
  const handleTheClose = () => {
    setOpenDrawer(false);
  };
  console.log("leftdrawer=>", leftDrawer);
  return (
    <div>
      <SecondNav closeDrawer={handleTheCloseLeftDrawer} show={leftDrawer} arr1={navLink3} />
      <NavDrawer
        arr1={navLink2}
        arr={navLink1}
        show={openDrawer}
        closeDrawer={handleTheClose}
      />
      {/* {" one "} */}
      <div>
        <div className="h-10 flex justify-between  large:px-10 medium:px-8 small:px-5 base:px-2 w-full bg-[#B52828]">
          {/* one  */}
          <div className="flex gap-8 large:gap-8 medium:gap-6 small:gap-4 base:gap-4 items-center h-full">
            {navLink1.map((el, i) => (
              <div key={i}>
                <p className="text-white large:text-[15px] medium:text-[14px] small:text-[13px] base:text-[12px]">
                  {el.name}
                </p>
              </div>
            ))}
          </div>
          {/* two  */}
          <div
            onClick={() => setOpenDrawer(!openDrawer)}
            className="flex gap-8 items-center h-full"
          >
            <AiOutlineMenu className="text-white medium:h-6 medium:w-6 base:h-5 base:w-5 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* two  */}
      <div className="flex border-b large:px-10 medium:px-8 small:px-5 base:px-2 justify-between h-14 border-gray-300">
        {/* part 1 */}
        <div>
          <div className="flex gap-8 items-center h-full">
            <div className="relative h-[50px] w-[165px]">
              <Image fill alt="logo" src={"/logo.png"} />
            </div>

            <div className="relative cursor-pointer h-10 w-10">
              <div className="absolute bg-[#a03535] h-full w-full rounded-full animate-ping animate-delay-700"></div>
              <div className="absolute bg-[#B52828] p-3 rounded-full">
                <FaPlay className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* part 2 */}
        <div
          onClick={() => setLeftDrawer(!leftDrawer)}
          className="flex gap-8 items-center h-full"
        >
          <AiOutlineMenu className="text-black medium:h-6 medium:w-6 base:h-5 base:w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
