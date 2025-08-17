import type { CartProductInterface } from "~/types";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Props {
  product: CartProductInterface;
}

const CartProduct: React.FC<Props> = ({ product }) => {
  const [amount, setAmount] = useState<number>(product.amount);
  const [cartProductsArray, setCartProductsArray] = useState<
    CartProductInterface[]
  >([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cartProducts = localStorage.getItem("products");
    console.log("cartProducts", cartProducts);
    const productsArray: CartProductInterface[] = cartProducts
      ? JSON.parse(cartProducts)
      : [];

    setCartProductsArray(productsArray);
  }, [window]);

  const incrementProduct = () => {
    const updatedCartProducts = cartProductsArray.map((item) => {
      if (item.id === product.id) {
        item.amount++;
        return item;
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(updatedCartProducts));
    setAmount((prev) => (prev += 1));
    window.dispatchEvent(new Event("storage"));
  };

  const decrementProduct = () => {
    if (amount === 1) return;

    const updatedCartProducts = cartProductsArray.map((item) => {
      if (item.id === product.id) {
        item.amount--;
        return item;
      } else {
        return item;
      }
    });
    localStorage.setItem("products", JSON.stringify(updatedCartProducts));
    setAmount((prev) => (prev -= 1));
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemoveFromCart = () => {
    return;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <img src={product.image} className="w-full md:w-44 h-auto mb-4" />

      <div className="space-y-4">
        <p className="text-center md:text-left font-bold">{product.title}</p>

        <p className="text-center md:text-left">${product.price}</p>

        <div className="space-y-4 grid grid-flow-row justify-center md:justify-start">
          <div className="flex items-center gap-6 justify-between">
            <Button variant="primary-btn" onClick={decrementProduct}>
              -
            </Button>
            <p>{amount}</p>
            <Button variant="primary-btn" onClick={incrementProduct}>
              +
            </Button>
          </div>

          <Button variant="secondary-btn" onClick={handleRemoveFromCart}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
