import React, { useContext, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ToasterContext } from "~/context/ToasterContext";
import Toaster from "../Toaster";

interface Props {
  children: ReactNode;
}

const ToasterProvider: React.FC<Props> = ({ children }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [variant, setVariant] = useState<"success" | "error">("success");
  const [text, setText] = useState<string>("");

  const showToast = (toastVariant: "success" | "error", toastText: string) => {
    setVariant(toastVariant);
    setText(toastText);
    setIsShown(true);
    setTimeout(() => setIsShown(false), 5000);
  };
  return (
    <ToasterContext.Provider value={{ showToast: showToast }}>
      {children}
      <div className="absolute bottom-2 right-2">
        <Toaster variant={variant} text={text} />
      </div>
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
