import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const LaptopSidebar = ({ children }) => {
  const pathname = usePathname();
  let noSidebar = [];
  return (
    <>
      {noSidebar.includes(pathname) ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navbar />
          {children}
        </div>
      )}
    </>
  );
};

export default LaptopSidebar;
