import React, { useEffect, useRef, type ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const ClickOutsideWrapper: React.FC<Props> = ({
  onClose,
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isTargetElement = (target: any) => {
        if (target instanceof Element) {
          return target;
        } else {
          return;
        }
      };

      if (ref.current && isTargetElement(e.target)?.contains(ref.current)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={`w-full h-full ${className}`} ref={ref}>
      {children}
    </div>
  );
};

export default ClickOutsideWrapper;
