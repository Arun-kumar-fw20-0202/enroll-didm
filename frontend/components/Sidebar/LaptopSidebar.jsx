import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";

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
      {noSidebar.includes(pathname) ? (
        { children }
      ) : (
        <>
          {isDesktopOrLaptop ? <Navbar /> : <MobileNavbar />}
          {children}
        </>
      )}
      <Footer />
    </div>
  );
};

export default LaptopSidebar;

// export default dynamic(() => Promise.resolve(LaptopSidebar), { ssr: false });
