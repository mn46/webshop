import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconType } from "~/types";

interface Props {
  icon: IconType;
}

const IconButton: React.FC<Props> = ({ icon }) => {
  return (
    <button>
      <FontAwesomeIcon icon={icon.icon} size="xl" className="text-gray-800" />
    </button>
  );
};

export default IconButton;
