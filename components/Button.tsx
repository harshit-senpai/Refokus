import { IoIosReturnRight } from "react-icons/io";

interface ButtonProps {
  title?: string;
}

const Button = ({ title = "Get Started" }: ButtonProps) => {
  return (
    <div className="max-w-40 min-w-40 px-4 py-2 rounded-full text-black bg-white flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
