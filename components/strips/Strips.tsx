import { stripData } from "@/constants";
import Strip from "./Strip";

const Strips = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 mt-24">
      {stripData.map((strip, index) => (
        <Strip key={index} img={strip.img} number={strip.number} />
      ))}
    </div>
  );
};

export default Strips;
