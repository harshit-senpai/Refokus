import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Cards from "@/components/card/Cards";
import Marquees from "@/components/marquee/Marquees";
import Products from "@/components/products/Products";
import Strips from "@/components/strips/Strips";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-zinc-900 overflow-y-none">
      <Navbar />
      <Work />
      <Strips />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}
