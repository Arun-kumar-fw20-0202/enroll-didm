import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

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

const Navbar = () => {
  return (
    <>
      {/* //nav one */}
      <div>
        <div className="h-10 flex justify-between px-28 w-full bg-[#B52828]">
          {/* one  */}
          <div className="flex gap-8 items-center h-full">
            {navLink1.map((el, i) => (
              <div key={i}>
                <p className="text-white text-[15px]">{el.name}</p>
              </div>
            ))}
          </div>
          {/* two  */}
          <div className="flex gap-8 items-center h-full">
            {navLink2.map((el, i) => (
              <div key={i} className="flex gap-2 items-center">
                {<el.icon className="text-white" />}
                <p className="text-white text-[15px]">{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //nav two */}
      <div className="flex border-b px-28 justify-between h-14 border-gray-300">
        {/* one  */}
        <div>
          <div className="flex gap-8 items-center h-full">
            <div className="relative h-[60px] w-[210px]">
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
        {/* two  */}
        <div className="flex gap-8">
          <div className="flex h-full items-center gap-8">
            {navLink3.map((el, i) => (
              <div>
                <p className="hover:text-red-800 transition-all duration-300 cursor-pointer">
                  {el.name}
                </p>
              </div>
            ))}
          </div>
          {/* three  */}
          <div className="h-full flex items-center">
            <Button
              variant="bordered"
              className="text-red-600 focus:outline-none border-red-800 font-semibold"
            >
              <MdOutlinePhone /> Request Callback
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
