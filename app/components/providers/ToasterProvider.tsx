import React, { useState, type ReactNode } from "react";
import { ToasterContext } from "~/context/ToasterContext";
import Toaster from "../Toaster";

interface Props {
  children: ReactNode;
}

const ToasterProvider: React.FC<Props> = ({ children }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);
  const [variant, setVariant] = useState<"success" | "error">("success");
  const [text, setText] = useState<string>("");

  const showToast = (toastVariant: "success" | "error", toastText: string) => {
    setVariant(toastVariant);
    setText(toastText);
    setIsShown(true);
    setTimeout(() => {
      setAnimateOut(true);
    }, 3500);
    setTimeout(() => {
      setAnimateOut(false);
      setIsShown(false);
    }, 5000);
  };

  return (
    <ToasterContext.Provider value={{ showToast: showToast }}>
      {children}
      {isShown && (
        <div
          className={`absolute bottom-4 right-4 ${
            animateOut ? "animate-jump-out" : "animate-jump-in"
          }`}
        >
          <Toaster variant={variant} text={text} />
        </div>
      )}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
