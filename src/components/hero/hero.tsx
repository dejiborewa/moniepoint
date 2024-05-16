import { AiFillThunderbolt } from "react-icons/ai";
import { GiDna2 } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-72px)] p-10 flex items-center justify-center bg-white">
      <div>
        <div className="flex gap-[2rem] w-full">
          <div className="w-[50%] 2xl:w-auto">
            <div className="flex items-center relative left-[1rem] 2xl:left-[3em]">
              <div className="w-[100px] h-[100px] bg-offWhite rounded-full flex items-center justify-center">
                <AiFillThunderbolt className="text-orange w-[40px] h-[40px]" />
              </div>

              <div className="w-[100px] h-[100px] bg-orange rounded-full flex items-center justify-center relative -left-[20px]">
                <GiDna2 className="text-white w-[40px] h-[40px]" />
              </div>

              <h1 className="text-[80px] 2xl:text-[150px]">Analytics</h1>
            </div>
            <h1 className="text-nowrap text-[80px] 2xl:text-[150px] 2xl:leading-[5rem]">
              that <span className="text-darkGrey">helps</span> you
            </h1>
          </div>

          <img src="/hero.png" alt="hero-img" className="w-[40%] 2xl:w-auto" />
        </div>

        <h1 className="flex items-center justify-end text-nowrap">
          <span className="text-[80px] 2xl:text-[150px] 2xl:leading-[12rem]">
            shape
          </span>
          <div className="w-[100px] h-[100px] bg-yellow rounded-full flex gap-[4px] items-center justify-center mx-6">
            <div className="bg-black rounded-sm w-[6px] h-[17px] relative top-2"></div>
            <div className="bg-black rounded-sm w-[6px] h-[22px]"></div>
            <div className="bg-black rounded-sm w-[6px] h-[12px]"></div>
          </div>
          <span className="text-[80px] 2xl:text-[150px] 2xl:leading-[12rem]">
            the future
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
