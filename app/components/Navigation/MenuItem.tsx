import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import type { MenuItem as MenuItemType } from "~/types";

interface Props {
  menuItem: MenuItemType;
}

const MenuItem: React.FC<Props> = ({ menuItem }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const isInUrl = pathname === menuItem.link;
    setIsActive(isInUrl);
  }, [pathname]);

  return (
    <Link
      to={{ pathname: menuItem.link, search: `?category=${menuItem.search}` }}
      className={isActive ? "border-b-2 border-b-black" : ""}
    >
      {menuItem.name}
    </Link>
  );
};

export default MenuItem;
