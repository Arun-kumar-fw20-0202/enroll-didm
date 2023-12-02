import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";

const LaptopSidebar = ({ children }) => {
  const pathname = usePathname();
  let noSidebar = ["/"];
  return (
    <>
      {noSidebar.includes(pathname) ? (
        <div>
          {children}
          {/* <Footer /> */}
        </div>
      ) : (
        <div>
          <Navbar />
          {children}
        </div>
      )}
      <Footer />
    </>
  );
};

export default LaptopSidebar;
