import { createContext } from "react";

export const ToasterContext = createContext<{
  showToast: (toastVariant: "success" | "error", toastText: string) => void;
} | null>(null);
