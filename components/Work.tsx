"use client";
import { images } from "@/constants";
import Image from "next/image";
import motion, { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Work = () => {
  const { scrollYProgress } = useScroll();
  const [image, setImage] = useState(images);

  const showImage = scrollYProgress.on("change", (data) => {
    function imageShow(arr: any) {
      setImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-6">
      <div className="relative max-w-[1440px] mx-auto text-center">
        <h1 className="text-[37vw] font-medium tracking-tight leading-none select-none">
          work
        </h1>
        <p className="text-zinc-400 text-lg font-regular leading-none text-muted">
          Web Design, Webflow Development, Creative Development
        </p>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (image, index) =>
              image.isActive && (
                <Image
                  src={image.url}
                  alt="work"
                  key={index}
                  width={300}
                  height={300}
                  style={{ top: image.top, left: image.left }}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
