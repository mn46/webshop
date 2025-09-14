import type { Product } from "~/types";
import { useLoaderData, useSearchParams } from "react-router";

export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();
  return products;
}

const products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const products: Product[] = useLoaderData();

  const getProductList = () => {
    switch (category) {
      case "all":
        return products;
        break;
      case "mens-clothing":
        return products.filter(
          (product) => product.category === "men's clothing"
        );
        break;
      case "womens-clothing":
        return products.filter(
          (product) => product.category === "women's clothing"
        );
        break;
      case "jewelery":
        return products.filter((product) => product.category === "jewelery");
        break;
      case "electronics":
        return products.filter((product) => product.category === "electronics");
        break;
      default:
        return products;
    }
  };

  return (
    <div>
      {getProductList().map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

export default products;
