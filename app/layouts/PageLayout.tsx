import { useState, type ReactNode } from "react";
import Cart from "~/components/Cart";
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
        <div className="fixed bg-black/40 w-full h-full flex justify-end">
          <Cart />
        </div>
      )}
      <div className="mt-14">{children}</div>
    </main>
  );
};

export default PageLayout;
