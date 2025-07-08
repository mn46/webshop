import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type MenuItem = {
  link: string;
  name: string;
};

export type IconType = {
  icon: IconDefinition;
  altText: string;
};
