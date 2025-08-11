import type { CartProduct } from "~/types";

const Cart = () => {
  const products = localStorage.getItem("products");
  const productsArray: CartProduct[] = products ? JSON.parse(products) : [];

  console.log("productsArray", productsArray);
  return <div className="bg-white w-full md:w-1/2 lg:w-1/3">Cart</div>;
};

export default Cart;
