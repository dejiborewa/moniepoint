import { AiFillThunderbolt } from "react-icons/ai";
import { GiDna2 } from "react-icons/gi";
import {
  AnimateScaleImage,
  AnimateStaggeredCharcterVeritical,
} from "../animation-wrapper/animation-wrapper";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-72px)] p-10 flex items-center justify-center bg-white">
      <div>
        <div className="flex justify-between gap-[2rem] w-full 2xl:justify-start">
          <div className="w-[50%] 2xl:w-auto">
            <div className="flex items-center relative left-[1rem] 2xl:left-[3em]">
              <div className="w-[100px] h-[100px] bg-offWhite rounded-full flex items-center justify-center">
                <AiFillThunderbolt className="text-orange w-[40px] h-[40px]" />
              </div>

              <div className="w-[100px] h-[100px] bg-orange rounded-full flex items-center justify-center relative -left-[20px]">
                <GiDna2 className="text-white w-[40px] h-[40px]" />
              </div>

              <h1 className=" text-[50px] lg:text-[80px] 2xl:text-[150px]">
                <AnimateStaggeredCharcterVeritical>
                  Analytics
                </AnimateStaggeredCharcterVeritical>
              </h1>
            </div>
            <h1 className="text-nowrap  text-[50px] lg:text-[80px] 2xl:text-[150px]">
              <AnimateStaggeredCharcterVeritical>
                that
              </AnimateStaggeredCharcterVeritical>{" "}
              <AnimateStaggeredCharcterVeritical>
                helps
              </AnimateStaggeredCharcterVeritical>{" "}
              <AnimateStaggeredCharcterVeritical>
                you
              </AnimateStaggeredCharcterVeritical>
              {/* <span className="text-darkGrey"></span>  */}
            </h1>
          </div>

          <AnimateScaleImage
            src="/hero.png"
            alt="hero-img"
            className="md:w-[30%] 2xl:w-auto"
          />
        </div>

        <h1 className="flex items-center justify-end text-nowrap">
          <span className="text-[50px] leading-[6rem] lg:text-[80px] 2xl:text-[150px] 2xl:leading-[12rem]">
            <AnimateStaggeredCharcterVeritical>
              shape
            </AnimateStaggeredCharcterVeritical>
          </span>
          <div className="w-[100px] h-[100px] bg-yellow rounded-full flex gap-[4px] items-center justify-center mx-6">
            <div className="bg-black rounded-sm w-[6px] h-[17px] relative top-2"></div>
            <div className="bg-black rounded-sm w-[6px] h-[22px]"></div>
            <div className="bg-black rounded-sm w-[6px] h-[12px]"></div>
          </div>
          <span className="text-[50px] leading-[6rem] lg:text-[80px] 2xl:text-[150px] 2xl:leading-[12rem]">
            <AnimateStaggeredCharcterVeritical>
              the future
            </AnimateStaggeredCharcterVeritical>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
