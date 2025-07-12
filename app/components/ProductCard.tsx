import type { Product } from "~/types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col min-w-96">
      <div className="flex items-center justify-center">
        <img src={product.image} className="h-96 w-auto" />
      </div>
      <div className="grid grid-flow-col items-center">
        <p className="bg-gray-800 text-white p-2">{product.title}</p>
        <p className="bg-green-800 text-white p-2 h-full">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
