"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
interface CardProps {
  width: string;
  start: boolean;
  para: boolean;
  hover?: string;
}

const Card = ({ width, start, para, hover }: CardProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover && "#7443ff", padding: "25px" }}
      className={`${width}  bg-zinc-800 p-5 rounded-xl min-h-60 lg:min-h-96 flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Some Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Another Heading</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-6xl mt-6 lg:mt-0 font-semibold tracking-tight leading none">
              Start a project
            </h1>
            <button className="mt-5 px-5 py-3 border-[1px] border-zinc-300 rounded-full">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
