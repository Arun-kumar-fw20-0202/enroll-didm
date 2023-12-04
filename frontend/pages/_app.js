import LaptopSidebar from "@/components/Sidebar/LaptopSidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LaptopSidebar>
      <Component {...pageProps} />
    </LaptopSidebar>
  );
}
