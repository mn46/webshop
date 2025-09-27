import { useLoaderData, useSearchParams } from "react-router";
import ProductCard from "~/components/ProductCard";
import CardSkeleton from "~/components/skeletons/CardSkeleton";
import PageLayout from "~/layouts/PageLayout";
import type { Product } from "~/types";

export async function loader() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();
  return products;
}

const search = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  const products: Product[] = useLoaderData();

  const searchResults = products?.filter((product) => {
    if (!search) return;

    if (
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    )
      return product;
  });

  return (
    <PageLayout>
      <section className="pt-10 flex flex-col mx-4 md:mx-10 lg:mx-34">
        <h2 className="uppercase text-2xl border-b-2 border-b-green-800 w-max">
          Search results
        </h2>
        <h3 className="text-xl mt-10">Showing results for "{search}"</h3>
        <div className="grid grid-flow-col gap-x-10 mt-10  overflow-x-auto md:px-10">
          {products ? (
            searchResults.length > 0 ? (
              searchResults.map((product) => (
                <ProductCard product={product} key={product?.id} />
              ))
            ) : (
              <p>There are no results matching your search.</p>
            )
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

export default search;
