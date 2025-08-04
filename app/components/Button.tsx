import type { MouseEventHandler, ReactNode } from "react";

interface Props {
  variant: "primary-btn" | "secondary-btn";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ variant, children, onClick }) => {
  return (
    <button className={variant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
