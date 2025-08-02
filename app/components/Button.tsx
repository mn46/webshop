import type { ReactNode } from "react";

interface Props {
  variant: string;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ variant, children }) => {
  return <button>{children}</button>;
};

export default Button;
