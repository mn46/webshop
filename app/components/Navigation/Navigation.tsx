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
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const icons = [
    { icon: faMagnifyingGlass, title: "search" },
    { icon: faHeart, title: "favourites" },
    { icon: faCartShopping, title: "shopping cart" },
  ];

  const handleToggleMenu = () => {
    setIsMenuActive((prev) => !prev);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed left-0 top-0" style={{ width: "100vw" }}>
      <div className="px-2 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} />
        </Link>

        <div className="hidden lg:block">
          <CategoriesNavigation />
        </div>

        <div className="flex gap-4 h-full">
          {icons.map((icon) => (
            <IconButton icon={icon} key={icon.title} />
          ))}

          <button
            onClick={handleToggleMenu}
            className={`${
              isMenuActive ? "bg-green-950" : "bg-transparent"
            } px-2 pt-3 pb-5 lg:hidden`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="text-white"
                title="close"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="text-gray-800"
                title="menu"
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
    </nav>
  );
};

export default Navigation;
