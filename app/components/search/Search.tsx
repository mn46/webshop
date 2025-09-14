import type { SetStateAction } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import Button from "../Button";
import { Link } from "react-router";

interface Props {
  setIsSearchOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Search: React.FC<Props> = ({ setIsSearchOpen }) => {
  return (
    <ClickOutsideWrapper
      onClose={() => {
        setIsSearchOpen(false);
      }}
    >
      <div className="grid grid-rows-1 grid-cols-[1fr_auto] items-center justify-center px-10 md:px-52 mt-32">
        <input className="bg-white h-full p-2"></input>
        <Link className="primary-btn">Search</Link>
      </div>
    </ClickOutsideWrapper>
  );
};

export default Search;
