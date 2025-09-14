import { useState, type SetStateAction } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import Button from "../Button";
import { Link } from "react-router";

interface Props {
  setIsSearchOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Search: React.FC<Props> = ({ setIsSearchOpen }) => {
  const [search, setSearch] = useState<string>("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <ClickOutsideWrapper
      onClose={() => {
        setIsSearchOpen(false);
      }}
    >
      <div className="grid grid-rows-1 grid-cols-[1fr_auto] items-center justify-center px-10 md:px-52 mt-32">
        <input
          name="search"
          className="bg-white h-full p-2"
          onChange={(e) => handleValueChange(e)}
        ></input>
        <Link
          to={{ pathname: "/search", search: `?search=${search}` }}
          className="primary-btn"
        >
          Search
        </Link>
      </div>
    </ClickOutsideWrapper>
  );
};

export default Search;
