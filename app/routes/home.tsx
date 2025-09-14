import type { Route } from "./+types/home";
import { HomePageSection } from "../components/homepage/HomepageSection";
import PageLayout from "~/layouts/PageLayout";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "~/types";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Webshop" },
    { name: "webshop", content: "Welcome to the Webshop!" },
  ];
}

export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const bestRated = useMemo(
    () => products?.filter((product) => product.rating.rate > 3),
    [products]
  );

  const bestDeals = useMemo(
    () => products?.filter((product) => product.price < 100),
    [products]
  );

  return (
    <PageLayout>
      <div className="bg-gray-300 py-10">
        <HomePageSection headline="top rated" productsList={bestRated} />
      </div>

      <div className="py-10">
        <HomePageSection headline="best deals" productsList={bestDeals} />
      </div>

      <div className="flex items-center justify-center">
        <Link
          to={{ pathname: "/products", search: "?category=all" }}
          className="primary-btn"
        >
          See all products
        </Link>
      </div>
    </PageLayout>
  );
}
