import type { Route } from "./+types/home";
import { HomePageSection } from "../components/homepage/HomepageSection";
import PageLayout from "~/layouts/PageLayout";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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

  return (
    <PageLayout>
      <HomePageSection headline="top rated" productsList={bestRated} />
    </PageLayout>
  );
}
