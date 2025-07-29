import type { Product } from "~/types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="grid grid-flow-row min-w-96">
      <div className="h-96 flex items-center justify-center bg-white">
        <img src={product.image} className="h-80 w-auto" />
      </div>
      <div className="h-24 grid grid-cols-[80%_20%]">
        <p className="bg-gray-800 text-white p-2">{product.title}</p>
        <p className=" text-white bg-green-800 p-2 text-center">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
