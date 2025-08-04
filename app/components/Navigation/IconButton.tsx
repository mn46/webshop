import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import type { IconType } from "~/types";

interface Props {
  icon: IconType;
}

const IconButton: React.FC<Props> = ({ icon }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={`${
        isActive ? "bg-green-800" : "bg-transparent"
      } px-2 pt-3 pb-5`}
      onClick={toggleIsActive}
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
