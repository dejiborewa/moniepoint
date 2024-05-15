import { IoIosLink } from "react-icons/io";
import { headerList } from "../../utils/conts";
import Button from "../button/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black text-offWhite rounded-[14px] h-[64px] pl-6 py-2 pr-2">
      <div className="flex items-center gap-1 cursor-pointer">
        <IoIosLink className="w-[18px] h-[18px]" />
        <span className="text-base font-bold">ramos</span>
      </div>

      <ul className="flex items-center bg-lightGrey font-light text-[14px] h-full gap-[2em] px-[2em] rounded-[14px]">
        {headerList.map((item, index) => (
          <li key={index} className="cursor-pointer font-semibold">
            {item}
          </li>
        ))}
      </ul>

      <Button
        text="Sign Up"
        classname="text-[14px] bg-white text-black h-full px-6 rounded-[14px] font-semibold"
      />
    </header>
  );
};

export default Header;
