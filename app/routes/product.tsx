import { useLoaderData } from "react-router";
import type { Route } from "./+types/product";
import type { Product } from "~/types";
import PageLayout from "~/layouts/PageLayout";
import { useContext, useState } from "react";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToasterContext } from "~/context/ToasterContext";

export async function loader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();
  return product;
}

const product = () => {
  const [amount, setAmount] = useState<number>(1);
  const product: Product = useLoaderData();

  const { showToast } = useContext(ToasterContext);

  const incrementProduct = () => {
    setAmount((prev) => (prev += 1));
  };

  const decrementProduct = () => {
    if (amount === 1) return;
    setAmount((prev) => (prev -= 1));
  };

  const handleAddToCart = () => {
    const productsList = localStorage.getItem("products");
    let newList = [];
    if (!productsList) {
      newList.push({ ...product, amount: amount });
    } else {
      let storedList: LocalStorageProducts[] = JSON.parse(productsList);

      const productOnList = storedList.find((item) => item.id === product.id);

      if (productOnList !== undefined) {
        storedList = storedList.map((item) => {
          if (item.id === productOnList.id) {
            item.amount = item.amount + amount;
            return item;
          } else {
            return item;
          }
        });

        newList = storedList;
      } else {
        newList = [...storedList, { ...product, amount: amount }];
      }
    }

    localStorage.setItem("products", JSON.stringify(newList));
    showToast("success", "Item was added to the cart.");
    return;
  };

  const handleAddToFavourites = () => {
    return;
  };

  return (
    <PageLayout>
      <div className="pt-10 lg:pt-28 mx-10 lg:mx-24 xl:mx-64 grid grid-flow-row lg:grid-cols-2 justify-items-center">
        <div>
          <img src={product.image} className="w-[90vw] md:w-80 h-auto" />
        </div>
        <div className="mt-10 lg:mt-0 space-y-6">
          <h3 className="text-3xl text-center lg:text-left">{product.title}</h3>
          <h4 className="text-xl text-center lg:text-left">${product.price}</h4>
          <p className=" text-center lg:text-left">{product.description}</p>

          <div className="space-y-4 lg:w-40 grid grid-rows-2 justify-center">
            <div className="flex items-center justify-between">
              <Button variant="primary-btn" onClick={decrementProduct}>
                -
              </Button>
              <p>{amount}</p>
              <Button variant="primary-btn" onClick={incrementProduct}>
                +
              </Button>
            </div>

            <div className="grid grid-flow-col">
              <Button variant="secondary-btn" onClick={handleAddToCart}>
                Add to cart
              </Button>
              <Button variant="primary-btn" onClick={handleAddToFavourites}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default product;
