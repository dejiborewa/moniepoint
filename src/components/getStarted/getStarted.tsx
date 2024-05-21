import { IoIosLink } from "react-icons/io";
import Button from "../lib/button/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const GetStarted = () => {
  const getStartedRef = useRef(null);

  useGSAP(() => {
    gsap.from(getStartedRef.current, {
      scale: 2,
      scrollTrigger: {
        trigger: getStartedRef.current,
        toggleActions: "restart pause resume pause",
      },
    });
  });

  return (
    <section className="h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="bg-orange w-[150px] h-[150px] flex items-center justify-center rounded-[45px] mx-auto shadow-orange"
          ref={getStartedRef}
        >
          <IoIosLink className="w-[80px] h-[80px] text-white font-bold" />
        </div>

        <div className="text-center">
          <h1 className="text-[150px]">Get Started</h1>
          <p className="text-[20px] font-[500] text-darkGrey">
            Turn Information into advantage! Start using
            <br />
            Ramos today. Sign up for a free trial.
          </p>
        </div>

        <div className="flex gap-[1rem] justify-center mt-20">
          <Button
            text="Request a demo"
            classname="bg-offWhite px-12 py-4 rounded-[14px] font-semibold"
          />
          <Button
            text="Start for free"
            classname="bg-orange px-12 py-4 rounded-[14px] text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
