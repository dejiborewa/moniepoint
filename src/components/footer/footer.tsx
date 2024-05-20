import { TbLetterRSmall } from "react-icons/tb";
import { BsQrCode } from "react-icons/bs";

import { footerLocation, footerMenu, socials } from "../../utils/conts";

const Footer = () => {
  return (
    <footer className="bg-black h-screen -mx-6 -mb-6 p-20 flex flex-col justify-between">
      <div className="flex justify-between items-center pb-10 border-b border-grey">
        <ul className="flex text-[24px] gap-[2rem]">
          {footerMenu.map((item, index) => (
            <li key={index} className="text-darkGrey">
              {item}
            </li>
          ))}
        </ul>

        <h1 className="text-[100px] text-white">hello@ramos.com</h1>
      </div>

      <div className="flex justify-between my-10">
        <div className="flex gap-[4rem]">
          {footerLocation.map((item, index) => (
            <div key={index}>
              <span className="block font-semibold text-white">
                {item.location}
              </span>
              <span className="block text-darkGrey">{item.adddress}</span>
              <span className="block text-darkGrey">{item.number}</span>
            </div>
          ))}
        </div>

        <ul className="text-white">
          {socials.map((item, index) => (
            <li key={index} className="my-2 text-[20px]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="relative text-white text-[150px] w-max">
          Ramos
          <span className="w-[3rem] h-[3rem] absolute -right-12 top-12 border-4 border-white rounded-full ">
            <TbLetterRSmall className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" />
          </span>
        </h1>

        <span className="text-darkGrey">Privacy Policy</span>
        <span className="text-darkGrey">License agreement</span>

        <div className="w-[6rem] h-[6rem] bg-white p-4">
          <BsQrCode className="text-black w-full h-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
