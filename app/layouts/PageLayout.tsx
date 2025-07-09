import type { ReactNode } from "react";
import Navigation from "~/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default PageLayout;
