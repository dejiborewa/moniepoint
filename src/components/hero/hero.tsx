import { AiFillThunderbolt } from "react-icons/ai";
import { GiDna2 } from "react-icons/gi";
import { MdSignalCellularAlt1Bar } from "react-icons/md";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-72px)] p-10 flex items-center justify-center">
      <div>
        <div className="flex gap-[2em]">
          <div>
            <div className="flex items-center relative left-[3em]">
              <div className="w-[100px] h-[100px] bg-offWhite rounded-full flex items-center justify-center">
                <AiFillThunderbolt className="text-orange" />
              </div>

              <div className="w-[100px] h-[100px] bg-orange rounded-full flex items-center justify-center relative -left-[20px]">
                <GiDna2 className="text-white" />
              </div>

              <h1 className="text-[150px]">Analytics</h1>
            </div>
            <h1 className="text-[150px] leading-[5rem]">
              that <span className="text-offWhite">helps</span> you
            </h1>
          </div>

          <img src="/hero.png" alt="hero-img" className="" />
        </div>

        <h1 className="flex items-center justify-end">
          <span className="text-[150px] leading-[12rem]">shape</span>
          <div className="w-[100px] h-[100px] bg-yellow rounded-full flex items-center justify-center mx-6">
            <MdSignalCellularAlt1Bar />
          </div>
          <span className="text-[150px] leading-[12rem]">the future</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
