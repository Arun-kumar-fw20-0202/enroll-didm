import LaptopSidebar from "@/components/Sidebar/LaptopSidebar";
import RectQuery from "@/providers/RectQuery";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <RectQuery>
      <LaptopSidebar>
        <Toaster />
        <Component {...pageProps} />
      </LaptopSidebar>
    </RectQuery>
  );
}
