import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="min-w-40 px-4 py-2 rounded-full text-black bg-white flex items-center justify-between">
      <span className="text-sm font-medium">Get Started</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
