import type { CartProductInterface } from "~/types";
import CartProduct from "./CartProduct";
import Button from "../Button";
import { useEffect, useState, type SetStateAction } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";

interface Props {
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Cart: React.FC<Props> = ({ setIsCartOpen }) => {
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
    const callback = () => {
      const products = localStorage.getItem("products");
      const newProductsArray: CartProductInterface[] = products
        ? JSON.parse(products)
        : [];

      setProductsArray(newProductsArray);

      if (newProductsArray.length === 0) {
        setTotal(0);
      } else {
        const newTotal = newProductsArray
          .map((item) => item.price * item.amount)
          .reduce((acc, current) => acc + current);
        setTotal(newTotal);
      }
    };

    callback();

    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  }, []);

  return (
    <ClickOutsideWrapper
      onClose={() => {
        setIsCartOpen(false);
      }}
      className="flex justify-end"
    >
      <div className="bg-white w-full h-full md:w-1/2 lg:w-1/3 p-10 overflow-y-auto">
        {productsArray.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          productsArray.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))
        )}

        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl">Total: ${parseFloat(total.toFixed(1))}</h3>
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
    </ClickOutsideWrapper>
  );
};

export default Cart;
