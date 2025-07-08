import { Link } from "react-router";
import Logo from "../../../src/webshop-logo.svg";
import CategoriesNavigation from "./CategoriesNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";

const Navigation = () => {
  const icons = [
    { icon: faMagnifyingGlass, altText: "search" },
    { icon: faHeart, altText: "favourites" },
    { icon: faCartShopping, altText: "shopping cart" },
    { icon: faBars, altText: "menu" },
  ];

  return (
    <div className="p-2 flex justify-between items-center">
      <Link to="/">
        <img src={Logo} />
      </Link>

      <CategoriesNavigation />

      <div className="space-x-6">
        {icons.map((icon) => (
          <IconButton icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
