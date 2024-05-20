import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { TiChartLine } from "react-icons/ti";
import useMeasure from "react-use-measure";
import Button from "../lib/button/button";
import { AnimateStaggeredCharcterVeritical } from "../animation-wrapper/animation-wrapper";

const Efficiency = () => {
  const [ref, bounds] = useMeasure();

  const x = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -bounds.width - 160;
    const controls = animate(x, [0, finalPosition], {
      ease: "linear",
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [x, bounds.width]);

  useMotionValue(0);

  return (
    <section className="bg-white h-screen py-10 px-20 flex flex-col justify-around">
      <h1 className="text-[50px] leading-[5rem] lg:text-[80px] 2xl:text-[150px] 2xl:leading-[10rem]">
        <AnimateStaggeredCharcterVeritical>
          Maximum
        </AnimateStaggeredCharcterVeritical>{" "}
        <AnimateStaggeredCharcterVeritical className="text-darkGrey">
          efficiency
        </AnimateStaggeredCharcterVeritical>{" "}
        <br />
        <AnimateStaggeredCharcterVeritical>
          with
        </AnimateStaggeredCharcterVeritical>{" "}
        <AnimateStaggeredCharcterVeritical>
          our
        </AnimateStaggeredCharcterVeritical>{" "}
        <AnimateStaggeredCharcterVeritical>
          intuative
        </AnimateStaggeredCharcterVeritical>
      </h1>

      <div className="flex justify-between my-8 2xl:my-16">
        <div className="flex">
          <div className="w-[100px] h-[100px]  2xl:w-[200px] 2xl:h-[200px] bg-offWhite rounded-full flex items-center justify-center z-10">
            <span className="bg-orange w-[50px] h-[50px] rounded-[10px] flex items-center justify-center">
              <TiChartLine className="text-white text-2xl" />
            </span>
          </div>

          <div className="w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px] bg-yellow rounded-full flex items-center justify-center relative -left-4">
            <div className="text-center w-[80px]">
              <span className="font-semibold text-[25px]">45%</span>
              <span className="block font-light text-[14px]">
                System grow faster
              </span>
            </div>
          </div>
        </div>

        <div className="bg-yellow h-[150px] w-[250px] overflow-hidden flex items-center rounded-[60px] 2xl:w-[500px] 2xl:h-[200px] gap-8">
          {["Analytics", "service"].map((item, index) => (
            <motion.h1
              ref={ref}
              style={{ x }}
              className="text-[50px] 2xl:text-[200px] text-nowrap"
              key={index}
            >
              {item}
            </motion.h1>
          ))}
        </div>
      </div>

      <div className="flex justify-between border-t-2 border-darkGrey py-10">
        <div className="text-base">
          <p>
            Explore traffic sources, page behavior, conversions and more to gain
            deep insight
          </p>
          <p>
            into your audience. With us, your business doesn't just adapt - it
            evolves
          </p>
        </div>

        <div className="flex gap-[1rem]">
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

export default Efficiency;
