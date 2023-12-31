import Image from "next/image";
import { Inter } from "next/font/google";
import JoinMaster from "../components/LandingPage/JoinMaster";
import TrainingBox from "@/components/LandingPage/TrainingBox";
import ToolsMastery from "@/components/LandingPage/ToolsMaster";
import PromoBanner from "@/components/LandingPage/PromoBanner";
import ScratchCardComponent from "@/components/LandingPage/ScratchCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <JoinMaster />
      <TrainingBox />
      <ToolsMastery />
      <PromoBanner />
    </div>
  );
}
