import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-zinc-900 overflow-y-none">
      <Navbar />
      <Work />
    </div>
  );
}
