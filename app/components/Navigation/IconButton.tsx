import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import type { IconType } from "~/types";

interface Props {
  icon: IconType;
  onClickAction?: (() => void) | null;
  isActive: boolean;
}

const IconButton: React.FC<Props> = ({ icon, onClickAction, isActive }) => {
  const [isOpen, setIsOpen] = useState<boolean>(isActive);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
    if (onClickAction) onClickAction();
  };

  return (
    <button
      className={`${
        isActive ? "bg-green-800" : "bg-transparent"
      } px-2 pt-3 pb-5`}
      onClick={toggleIsOpen}
    >
      <FontAwesomeIcon
        icon={icon.icon}
        size="xl"
        className={isActive ? "text-white" : "text-gray-800"}
        title={icon.title}
      />
    </button>
  );
};

export default IconButton;
