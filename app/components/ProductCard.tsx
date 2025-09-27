import { Link } from "react-router";
import type { Product } from "~/types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="grid grid-flow-row min-w-[90vw] md:min-w-96 md:max-w-[30rem]"
    >
      <div className="h-96 flex items-center justify-center bg-white">
        <img src={product.image} className="h-80 w-auto" />
      </div>
      <div className="h-28 grid grid-cols-[75%_25%] md:grid-cols-[80%_20%]">
        <p className="bg-gray-800 text-white p-2">{product.title}</p>
        <p className=" text-white bg-green-800 p-2 text-center">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
