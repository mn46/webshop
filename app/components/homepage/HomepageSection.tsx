import Navigation from "~/components/Navigation/Navigation";
import type { Product } from "~/types";

interface Props {
  productsList: Product[] | null;
}

export const HomePageSection: React.FC<Props> = ({ productsList }) => {
  return <section className=""></section>;
};
