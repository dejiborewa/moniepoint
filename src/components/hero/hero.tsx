import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiDna2 } from "react-icons/gi";
import SplitText from "../lib/splitText/splitText";

const Hero = () => {
  const container = useRef<HTMLElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useGSAP(() => {
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
          trigger: container.current,
          toggleActions: "restart pause resume pause",
        },
      },
    );

    gsap.from(".icon-animation", {
      rotate: 90,
      scale: 0.1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: container.current,
        toggleActions: "restart pause resume pause",
      },
    });

    gsap.from(image.current, {
      scale: 0.01,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: container.current,
        toggleActions: "restart pause resume pause",
      },
    });
  });

  return (
    <section
      className="w-full h-[calc(100vh-72px)] p-10 flex items-center justify-center bg-white"
      ref={container}
    >
      <div>
        <div className="flex gap-[2rem] w-full 2xl:justify-start leading-[9rem]">
          <div>
            <div className="flex items-center relative left-[1rem] 2xl:left-[3em]">
              <div className="icon-animation w-[100px] h-[100px] bg-offWhite rounded-full flex items-center justify-center">
                <AiFillThunderbolt className="icon-animation text-orange w-[40px] h-[40px]" />
              </div>

              <div className="icon-animation w-[100px] h-[100px] bg-orange rounded-full flex items-center justify-center relative -left-[20px]">
                <GiDna2 className="icon-animation text-white w-[40px] h-[40px]" />
              </div>
              <h1 className="text-[50px] lg:text-[80px] 2xl:text-[150px]">
                {SplitText("Analytics")}
              </h1>
            </div>
            <h1 className="text-nowrap text-[50px] lg:text-[80px] 2xl:text-[150px]">
              {SplitText("that helps you")}
            </h1>
          </div>

          <figure className="max-w-[50%]">
            <img src="/hero.png" alt="hero-img" ref={image} />
          </figure>
        </div>

        <h1 className="flex items-center justify-end text-nowrap leading-[6rem]">
          <span className="text-[50px] lg:text-[80px] 2xl:text-[150px]">
            {SplitText("shape")}
          </span>
          <div className="icon-animation w-[100px] h-[100px] bg-yellow rounded-full flex gap-[4px] items-center justify-center mx-6">
            <div className="bg-black rounded-sm w-[6px] h-[17px] relative top-2"></div>
            <div className="bg-black rounded-sm w-[6px] h-[22px]"></div>
            <div className="bg-black rounded-sm w-[6px] h-[12px]"></div>
          </div>
          <span className="text-[50px] lg:text-[80px] 2xl:text-[150px]">
            {SplitText("the future")}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
