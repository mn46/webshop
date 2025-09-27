import { type SetStateAction } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import Button from "../Button";
import { Form } from "react-router";

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
      <Form
        action="/search"
        className="grid gap-10 md:gap-0 md:grid-rows-1 md:grid-cols-[1fr_auto] items-center md:justify-center px-10 md:px-52 mt-32"
        onSubmit={() => setIsSearchOpen(false)}
      >
        <input name="search" className="bg-white h-14 md:h-full p-2"></input>
        <Button variant="primary-btn" type="submit">
          Search
        </Button>
      </Form>
    </ClickOutsideWrapper>
  );
};

export default Search;
