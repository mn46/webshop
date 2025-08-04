import { useLoaderData } from "react-router";
import type { Route } from "./+types/product";
import type { Product } from "~/types";

export async function loader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();
  return product;
}

const product = () => {
  const product: Product = useLoaderData();
  console.log("product", product);
  return <div>{product ? "loaded" : "LOADING..."}</div>;
};

export default product;
