import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import type { MenuItem as MenuItemType } from "~/types";

interface Props {
  menuItem: MenuItemType;
}

const MenuItem: React.FC<Props> = ({ menuItem }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === undefined) return;
    const url = window.location.href;
    console.log("url", url);
    const isInUrl = url.includes(menuItem.link);
    setIsActive(isInUrl);
  }, [window?.location.href]);

  return (
    <Link
      to={menuItem.link}
      className={isActive ? "border-b-2 border-b-black" : ""}
    >
      {menuItem.name}
    </Link>
  );
};

export default MenuItem;
