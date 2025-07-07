import { Link } from "react-router";
import Logo from "../../../src/webshop-logo.svg";
import CategoriesNavigation from "./CategoriesNavigation";

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <CategoriesNavigation />
    </div>
  );
};

export default Navigation;
