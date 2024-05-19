import { dataList } from "../../../utils/conts";
import { FiPlus } from "react-icons/fi";

const Menu = () => {
  return (
    <div className="mt-14">
      {dataList.map((item, index) => (
        <div
          key={index}
          className="bg-white flex items-center justify-between w-[300px] my-6 p-4 rounded-[20px] shadow-lg"
        >
          <p className="text-base font-[500]">{item}</p>
          <div className="w-[40px] h-[40px] bg-offWhite flex items-center justify-center rounded-full">
            <FiPlus />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
