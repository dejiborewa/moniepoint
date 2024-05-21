import { TbLetterRSmall } from "react-icons/tb";
import { BsQrCode } from "react-icons/bs";

import { footerLocation, footerMenu, socials } from "../../utils/conts";
import SplitText from "../lib/splitText/splitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const footerRef1 = useRef(null);
  const footerRef2 = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef1, {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: footerRef1.current,
      },
    });

    gsap.from(footerRef2, {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: footerRef2.current,
      },
    });

    gsap.from(".barcode", {
      scale: 0.01,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".barcode",
        toggleActions: "restart pause resume pause",
      },
    });

    const letters = document.querySelectorAll(".animate-letter");
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef1.current,
          start: "center center",
          toggleActions: "restart pause resume pause",
        },
      },
    );
  });

  return (
    <footer
      className="bg-black h-screen -mx-6 -mb-6 p-20 flex flex-col justify-between"
      ref={container}
    >
      <div
        className="flex justify-between items-center pb-10 border-b border-grey"
        ref={footerRef1}
      >
        <ul className="flex text-[24px] gap-[2rem]">
          {footerMenu.map((item, index) => (
            <li key={index} className="text-darkGrey">
              {item}
            </li>
          ))}
        </ul>

        <h1 className="text-[40px] text-white">hello@ramos.com</h1>
      </div>

      <div className="flex justify-between my-10" ref={footerRef2}>
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
          {SplitText("Ramos")}
          <span className="w-[3rem] h-[3rem] absolute -right-12 top-12 border-4 border-white rounded-full ">
            <TbLetterRSmall className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2" />
          </span>
        </h1>

        <span className="text-darkGrey">Privacy Policy</span>
        <span className="text-darkGrey">License agreement</span>

        <div className=" barcode w-[8rem] h-[8rem] bg-white p-4">
          <BsQrCode className=" text-black w-full h-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
