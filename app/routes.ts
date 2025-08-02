import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("all-products", "routes/products.tsx"),
] satisfies RouteConfig;
