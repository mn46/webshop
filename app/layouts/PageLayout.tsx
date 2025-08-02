import type { ReactNode } from "react";
import Navigation from "~/components/Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="pb-10">
      <Navigation />
      <div className="mt-14">{children}</div>
    </main>
  );
};

export default PageLayout;
