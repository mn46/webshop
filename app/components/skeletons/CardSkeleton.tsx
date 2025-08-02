const CardSkeleton = () => {
  return (
    <div className=" animate-pulse grid grid-flow-row gap-4 w-96">
      <div className="h-96 flex items-center justify-center bg-gray-400"></div>
      <div className="w-full grid grid-cols-[76%_20%] gap-4">
        <div className="space-y-2">
          <div className="bg-gray-400 rounded-full w-full h-6"></div>
          <div className="bg-gray-400 rounded-full w-2/3 h-6"></div>
        </div>
        <div className="bg-gray-400 rounded-full aspect-square"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
