"use client";
import { products } from "@/constants";
import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Products = () => {
  const [position, setPosition] = useState(46);

  const moverHandler = (value: number) => {
    setPosition(value * 20);
  };

  return (
    <div className="mt-20 relative">
      {products.map((product, index) => (
        <Product
          title={product.title}
          key={index}
          description={product.description}
          live={product.live}
          caseStudy={product.caseStudy}
          mover={moverHandler}
          count={index}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.6 }}
          className="absolute left-1/3 w-[26rem] h-[20rem] bg-white overflow-hidden rounded-lg"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-100"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-200"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png "
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-300"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-400"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-500"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-600"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cfab581d98facecc35d_YIR2022%20-%20mobile.png"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
            className="w-full h-full rounded-lg bg-sky-700"
          >
            <Image
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cd5ec5fbe7d560d053f_Yahoo%20-%20mobile.png"
              height={4200}
              width={4200}
              className="h-full w-full"
              alt="showcase"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
