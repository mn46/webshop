import { useState, type SetStateAction } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import Button from "../Button";
import { Form, Link, useNavigate } from "react-router";

interface Props {
  setIsSearchOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Search: React.FC<Props> = ({ setIsSearchOpen }) => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

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
      <Form
        action="/search"
        className="grid grid-rows-1 grid-cols-[1fr_auto] items-center justify-center px-10 md:px-52 mt-32"
      >
        <input
          name="search"
          className="bg-white h-full p-2"
          onChange={(e) => handleValueChange(e)}
        ></input>
        <Button variant="primary-btn" type="submit">
          Search
        </Button>
      </Form>
    </ClickOutsideWrapper>
  );
};

export default Search;
