import type { Product } from "~/types";
import { useLoaderData, useSearchParams } from "react-router";
import CardSkeleton from "~/components/skeletons/CardSkeleton";
import ProductCard from "~/components/ProductCard";
import PageLayout from "~/layouts/PageLayout";

export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();
  return products;
}

const products = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const products: Product[] = useLoaderData();

  const getProductList = () => {
    if (category === "all") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };

  return (
    <PageLayout>
      <section className="pt-10 flex flex-col mx-4 md:mx-10 lg:mx-34">
        <h2 className="uppercase text-2xl border-b-2 border-b-green-800 w-max">
          {category?.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10">
          {products ? (
            getProductList().map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default products;
