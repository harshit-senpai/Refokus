import Button from "../Button";

interface ProductProps {
  title: string;
  description: string;
  live: boolean;
  caseStudy?: boolean;
}

const Product = ({ title, description, live, caseStudy }: ProductProps) => {
  return (
    <div className="w-full py-20 px-20 hover:bg-gradient-to-r from-indigo-600 via-purple-500 transition-all duration-3000 hover:py-28">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-medium capitalize">{title}</h1>
        <div className="w-1/3">
          <p className="mb-10 text-lg font-regular text-muted">{description}</p>
          <div className="flex items-center gap-5">
            <Button />
            {caseStudy && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
