interface Props {
  variant: "success" | "error";
  text: string;
}

const Toaster: React.FC<Props> = ({ variant, text }) => {
  return (
    <div
      className={`p-4 text-white font-semibold ${
        variant === "success" ? "bg-green-800" : "bg-red-500"
      }`}
    >
      {text}
    </div>
  );
};

export default Toaster;
