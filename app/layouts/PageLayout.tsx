import { useState, type ReactNode } from "react";
import Cart from "~/components/cart/Cart";
import Navigation from "~/components/Navigation/Navigation";
import Search from "~/components/search/Search";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <main className="pb-10">
      <Navigation
        isCartOpen={isCartOpen}
        isSearchOpen={isSearchOpen}
        setIsCartOpen={setIsCartOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {isCartOpen && (
        <div className="fixed bg-black/40 w-full h-full ">
          <Cart setIsCartOpen={setIsCartOpen} />
        </div>
      )}
      {isSearchOpen && (
        <div className="fixed bg-black/40 w-full h-full ">
          <Search setIsSearchOpen={setIsSearchOpen} />
        </div>
      )}
      <div className="mt-14">{children}</div>
    </main>
  );
};

export default PageLayout;
