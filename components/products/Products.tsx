import { products } from "@/constants";
import Product from "./Product";

const Products = () => {
  return (
    <div className="mt-20">
      {products.map((product, index) => (
        <Product
          title={product.title}
          key={index}
          description={product.description}
          live={product.live}
          caseStudy={product.caseStudy}
        />
      ))}
    </div>
  );
};

export default Products;
