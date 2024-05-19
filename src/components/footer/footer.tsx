import { TbLetterRSmall } from "react-icons/tb";
// import { BsQrCode } from "react-icons/bs";

import { footerLocation, footerMenu, socials } from "../../utils/conts";

// <BsQrCode />

const Footer = () => {
  return (
    <footer className="bg-black h-screen -mx-6 -mb-6 p-20">
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

      <div>
        <h1 className="relative text-white text-[150px]">
          Ramos
          <span>
            <TbLetterRSmall className="absolute right-0" />
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
