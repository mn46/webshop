import type { CartProductInterface } from "~/types";
import CartProduct from "./CartProduct";

const Cart = () => {
  const products = localStorage.getItem("products");
  const productsArray: CartProductInterface[] = products
    ? JSON.parse(products)
    : [];

  console.log("productsArray", productsArray);
  return (
    <div className="bg-white w-full md:w-1/2 lg:w-1/3 p-10 overflow-y-auto">
      {productsArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        productsArray.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Cart;
