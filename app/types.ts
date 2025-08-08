import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type MenuItem = {
  link: string;
  name: string;
};

export type IconType = {
  icon: IconDefinition;
  title: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type LocalStorageProducts = {
  id: number;
  amount: number;
};
