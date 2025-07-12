import type { ReactNode } from "react";
import Navigation from "~/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div className="mx-10 lg:mx-34 mt-6">{children}</div>
    </main>
  );
};

export default PageLayout;
