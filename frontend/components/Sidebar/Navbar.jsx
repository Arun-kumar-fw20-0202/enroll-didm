import React from "react";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
// import {} from "@react-icons/md"

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
              <div>
                <p className="text-white text-[15px]">{el.name}</p>
              </div>
            ))}
          </div>
          {/* two  */}
          <div className="flex gap-8 items-center h-full">
            {navLink2.map((el, i) => (
              <div className="flex gap-2 items-center">
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
          <div className="flex gap-8">
            <p>Logo</p>
            <p>Play button</p>
          </div>
        </div>
        {/* two  */}
        <div className="flex gap-8">
          {navLink3.map((el, i) => (
            <div>{el.name}</div>
          ))}
        </div>
        {/* three  */}
      </div>
    </>
  );
};

export default Navbar;
