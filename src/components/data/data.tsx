import { useGSAP } from "@gsap/react";
import Menu from "../lib/menu/menu";
import gsap from "gsap";
import { useRef } from "react";

const Data = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, yPercent: 30 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top 80%",
          end: "center center",
        },
      },
    );

    // gsap.to(".orange-text", {
    //   width: "100%",
    //   background: "#fe4a23",

    //   scrollTrigger: {
    //     trigger: container.current,
    //     scrub: true,
    //     start: "top 80%",
    //     end: "center center",
    //   },
    // });
  });

  return (
    <section
      className="bg-offWhite h-[145vh] -mx-6 rounded-[100px] pl-20"
      ref={container}
    >
      <div className="flex overflow-x-hidden relative top-[15vh] 2xl:top-[25vh] z-10">
        <div className="w-[50%] 2xl:w-[40%]">
          <div className="text-[70px] leading-[5rem] font-[500]">
            <h1>
              Turning data into real
              <br /> action and ideas.
            </h1>
          </div>

          <Menu />
        </div>

        <div className="w-[50%] relative left-[200px] 2xl:w-[60%] overflow-hidden">
          <img src="/data.png" className="overflow-hidden" />
        </div>
      </div>

      <div className="relative h-max flex items-baseline font-semibold tracking-[-1.5em] 2xl:tracking-[-2em] overflow-hidden text-orange">
        <h1 className="text-[80px] lg:text-[300px] xl:text-[400px] 2xl:text-[580px] leading-none z-30">
          R
        </h1>
        <h1 className="text-[80px] lg:text-[300px] xl:text-[400px] 2xl:text-[580px] leading-none z-30">
          a
        </h1>
        <h1 className="text-[80px] lg:text-[300px] xl:text-[400px] 2xl:text-[580px] leading-none z-30">
          m
        </h1>
        <h1 className="text-[80px] lg:text-[300px] xl:text-[400px] 2xl:text-[580px] leading-none z-30">
          o
        </h1>
        <h1 className="text-[80px] lg:text-[300px] xl:text-[400px] 2xl:text-[580px] leading-none z-30">
          s
        </h1>
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 orange-text z-10" /> */}
      </div>
    </section>
  );
};

export default Data;
