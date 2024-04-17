"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = ({ imgUrls, direction }: any) => {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 pr-5"
      >
        {imgUrls.map((img: string, index: number) => (
          <Image key={index} src={img} height={100} width={100} alt="marquee" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 pr-5"
      >
        {imgUrls.map((img: string, index: number) => (
          <Image key={index} src={img} height={100} width={100} alt="marquee" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
