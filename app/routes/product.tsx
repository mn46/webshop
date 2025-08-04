import { useLoaderData } from "react-router";
import type { Route } from "./+types/product";
import type { Product } from "~/types";
import PageLayout from "~/layouts/PageLayout";
import { useState } from "react";
import Button from "~/components/Button";

export async function loader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();
  return product;
}

const product = () => {
  const [amount, setAmount] = useState<number>(1);
  const product: Product = useLoaderData();

  const incrementProduct = () => {
    setAmount((prev) => (prev += 1));
  };

  const decrementProduct = () => {
    if (amount === 1) return;
    setAmount((prev) => (prev -= 1));
  };
  return (
    <PageLayout>
      <div className="mt-10 lg:mt-32 mx-10 lg:mx-64 grid grid-cols-2">
        <div>
          <img src={product.image} className="w-[90vw] md:w-80 h-auto" />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl">{product.title}</h3>
          <h4 className="text-xl">${product.price}</h4>
          <p>{product.description}</p>

          <div>
            <div className="flex gap-6 items-center">
              <Button variant="primary-btn" onClick={decrementProduct}>
                -
              </Button>
              <p>{amount}</p>
              <Button variant="primary-btn" onClick={incrementProduct}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default product;
