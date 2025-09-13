import { useState, type ReactNode } from "react";
import Cart from "~/components/cart/Cart";
import Navigation from "~/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <main className="pb-10">
      <Navigation setIsCartOpen={setIsCartOpen} />
      {isCartOpen && (
        <div className="fixed bg-black/40 w-full h-full ">
          <Cart setIsCartOpen={setIsCartOpen} />
        </div>
      )}
      <div className="mt-14">{children}</div>
    </main>
  );
};

export default PageLayout;
