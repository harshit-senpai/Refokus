import { images } from "@/constants";
import Image from "next/image";

const Work = () => {
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
          {images.map(
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
