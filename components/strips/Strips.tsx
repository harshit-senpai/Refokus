import { stripData } from "@/constants";
import Strip from "./Strip";

const Strips = () => {
  return (
    <div className="grid grid-cols-5 mt-24">
      {stripData.map((strip, index) => (
        <Strip key={index} img={strip.img} number={strip.number} />
      ))}
    </div>
  );
};

export default Strips;
