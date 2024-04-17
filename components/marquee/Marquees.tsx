import { marqueeImage } from "@/constants";
import Marquee from "./Marquee";

const Marquees = () => {
  return (
    <div className="mt-[15rem]">
      {marqueeImage.map((marquee, index) => (
        <Marquee key={index} imgUrls={marquee} direction={index === 0? 'left' : 'right'} />
      ))}
    </div>
  );
};

export default Marquees;
