import Image from "next/image";

interface Props {
  img: string;
  number: number;
}

const Strip = ({ img, number }: Props) => {
  return (
    <div className="px-4 py-5 border-b-[1.2px] border-t-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between">
      <Image src={img} alt="image" height={100} width={100} />
      <span className="font-semibold">{number}</span>
    </div>
  );
};

export default Strip;
