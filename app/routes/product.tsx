import type { Route } from "./+types/product";

const product = ({ params }: Route.ComponentProps) => {
  console.log("params", params);
  return <div>product</div>;
};

export default product;
