import { controlList } from "../../../utils/conts";

const Revenue = () => {
  return (
    <>
      {controlList.map((item, index) => (
        <div className="flex items-center justify-between" key={index}>
          <div className="flex gap-2 items-center my-1">
            <img src={item.src} className="w-[30px] h-[30px] rounded-full" />
            <span className="text-xs">{item.level}</span>{" "}
          </div>

          <span className="text-xs font-semibold">{item.price}</span>
        </div>
      ))}
    </>
  );
};

export default Revenue;
