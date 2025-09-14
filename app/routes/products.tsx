import type { Product } from "~/types";
import { useLoaderData, useSearchParams } from "react-router";

export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const product: Product = await res.json();
  return product;
}

const products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const product: Product = useLoaderData();

  return <div>products</div>;
};

export default products;
