import Navigation from "~/components/Navigation/Navigation";
import type { Product } from "~/types";
import ProductCard from "../ProductCard";

interface Props {
  headline: string;
  productsList: Product[] | null | undefined;
}

export const HomePageSection: React.FC<Props> = ({
  productsList,
  headline,
}) => {
  return (
    <section className="flex flex-col">
      <h2 className="uppercase text-2xl border-b-2 border-b-green-950">
        {headline}
      </h2>

      <div className="grid grid-flow-col gap-x-10">
        {productsList?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
