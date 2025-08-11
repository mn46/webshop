import type { CartProductInterface } from "~/types";
import CartProduct from "./CartProduct";
import Button from "../Button";

const Cart = () => {
  const products = localStorage.getItem("products");
  const productsArray: CartProductInterface[] = products
    ? JSON.parse(products)
    : [];

  const total = productsArray
    .map((item) => item.price * item.amount)
    .reduce((acc, current) => acc + current);

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
        <h3 className="text-xl">Total: ${total}</h3>
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
