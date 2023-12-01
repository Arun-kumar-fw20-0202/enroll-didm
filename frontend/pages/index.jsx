import Image from "next/image";
import { Inter } from "next/font/google";
import JoinMaster from "../components/LandingPage/JoinMaster";
import TrainingBox from "@/components/LandingPage/TrainingBox";
import ToolsMastery from "@/components/LandingPage/ToolsMaster";
import PromoBanner from "@/components/LandingPage/PromoBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <JoinMaster />
      <TrainingBox />
      <ToolsMastery />
      <PromoBanner />
    </>
  );
}
