import type { ReactNode } from "react";
import Navigation from "~/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div className="mt-20">{children}</div>
    </main>
  );
};

export default PageLayout;
