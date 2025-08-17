import type { CartProductInterface } from "~/types";
import CartProduct from "./CartProduct";
import Button from "../Button";
import { useEffect, useState } from "react";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [productsArray, setProductsArray] = useState<CartProductInterface[]>(
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const products = localStorage.getItem("products");
    const newProductsArray: CartProductInterface[] = products
      ? JSON.parse(products)
      : [];
    setProductsArray(newProductsArray);
  }, [window]);

  useEffect(() => {
    if (productsArray.length === 0) return;

    const callback = () => {
      const products = localStorage.getItem("products");
      const newProductsArray: CartProductInterface[] = products
        ? JSON.parse(products)
        : [];

      const newTotal = newProductsArray
        .map((item) => item.price * item.amount)
        .reduce((acc, current) => acc + current);
      setTotal(newTotal);
    };

    callback();

    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  }, [productsArray]);

  return (
    <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-10 overflow-y-auto">
      {productsArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        productsArray.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))
      )}

      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl">Total: ${Math.round(total)}</h3>
        <Button
          variant="primary-btn"
          onClick={() => {
            return;
          }}
        >
          Go to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
