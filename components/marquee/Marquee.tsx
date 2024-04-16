import Image from "next/image";

const Marquee = ({ imgUrls }: any) => {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imgUrls.map((img: string, index: number) => (
        <Image
          key={index}
          src={img}
          height={100}
          width={100}
          alt="marquee"
          className="w-[6.2vw] flex-shrink-0"
        />
      ))}
      {imgUrls.map((img: string, index: number) => (
        <Image
          key={index}
          src={img}
          height={100}
          width={100}
          alt="marquee"
          className="w-[6.2vw] flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default Marquee;
