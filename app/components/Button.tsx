import type { MouseEventHandler, ReactNode } from "react";

interface Props {
  variant: "primary-btn" | "secondary-btn";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  variant,
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button className={variant} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
