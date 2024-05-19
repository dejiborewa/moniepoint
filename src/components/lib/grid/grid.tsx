import type { FC, PropsWithChildren } from "react";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  const array = Array.from({ length: 64 }, (_, i) => i);

  return (
    <div className="relative w-[40%] h-[600px] ">
      <div className="grid grid-cols-8 grid-rows-8 bg-offWhite overflow-hidden rounded-[20px] w-full h-full opacity-30">
        {array.map((_, index) => (
          <div key={index} className="border-[0.5px] border-darkGrey" />
        ))}

        <div className="absolute h-[50%] w-full bg-offWhite bottom-0 shadow-gridTop"></div>
      </div>

      {children}
    </div>
  );
};

export default Grid;
