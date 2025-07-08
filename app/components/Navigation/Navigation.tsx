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
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const icons = [
    { icon: faMagnifyingGlass, altText: "search" },
    { icon: faHeart, altText: "favourites" },
    { icon: faCartShopping, altText: "shopping cart" },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="p-2 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>

        <div className="hidden lg:block">
          <CategoriesNavigation />
        </div>

        <div className="space-x-6">
          {icons.map((icon) => (
            <IconButton icon={icon} />
          ))}

          <button className="lg:hidden" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="text-gray-800"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="text-gray-800"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden fixed top-14 bg-green-950 w-full h-full pt-32`}
      >
        <CategoriesNavigation />
      </div>
    </>
  );
};

export default Navigation;
