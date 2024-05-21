import { IoIosLink } from "react-icons/io";
import { headerList } from "../../utils/conts";
import Button from "../lib/button/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const container = useRef(null);

  useGSAP(() => {
    if (container.current) {
      gsap.from(container.current, {
        opacity: 0,
        y: "10%",
        ease: "power.in",
        duration: 1,
      });
    }
  });

  return (
    <header className="bg-black rounded-[14px]">
      <div
        ref={container}
        className="flex items-center justify-between h-[64px] text-offWhite  pl-6 py-2 pr-2"
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <IoIosLink className="w-[18px] h-[18px]" />
          <span className="text-base font-bold">ramos</span>
        </div>

        <ul className="flex items-center bg-grey font-light text-[14px] h-full gap-[2em] px-[2em] rounded-[14px]">
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
      </div>
    </header>
  );
};

export default Header;
