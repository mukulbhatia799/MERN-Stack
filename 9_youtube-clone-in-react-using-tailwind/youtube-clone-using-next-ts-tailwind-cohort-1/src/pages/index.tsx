import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrid } from "../components/VideoGrid";
import { TopBar } from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
    <TopBar />
    <VideoGrid />
  </div>
}
