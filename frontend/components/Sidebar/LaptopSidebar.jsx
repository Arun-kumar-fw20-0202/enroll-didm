import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import dynamic from "next/dynamic";

const LaptopSidebar = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1274px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const pathname = usePathname();
  let noSidebar = ["/"];
  return (
   <div>
      {/* {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      {isPortrait && <p>Your are inportrait orientation</p>} */}
      {noSidebar.includes(pathname) ? (
       {children}
      ) : (
        <>
          {isDesktopOrLaptop ? <Navbar /> : <MobileNavbar />}
          {children}
        </>
      )}
   </div>
  );
};

export default LaptopSidebar;

// export default dynamic(() => Promise.resolve(LaptopSidebar), { ssr: false });
