import type { Product } from "~/types";
import ProductCard from "../ProductCard";
import CardSkeleton from "../skeletons/CardSkeleton";

interface Props {
  headline: string;
  productsList: Product[] | null | undefined;
}

export const HomePageSection: React.FC<Props> = ({
  productsList,
  headline,
}) => {
  return (
    <section className="flex flex-col mx-4 md:mx-10 lg:mx-34">
      <h2 className="uppercase text-2xl border-b-2 border-b-green-800 w-max">
        {headline}
      </h2>

      <div className="grid grid-flow-col gap-x-10 mt-10  overflow-auto md:px-10">
        {productsList ? (
          productsList?.map((product) => (
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
  );
};
