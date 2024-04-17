"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Cards from "@/components/card/Cards";
import Marquees from "@/components/marquee/Marquees";
import Products from "@/components/products/Products";
import Strips from "@/components/strips/Strips";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  });
  return (
    <div className="w-full bg-zinc-900 overflow-y-none">
      <Navbar />
      <Work />
      <Strips />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}
