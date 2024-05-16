import { TiChartLine } from "react-icons/ti";

const Efficiency = () => {
  return (
    <section className="bg-white h-screen p-10">
      <h1 className="text-[50px] lg:text-[80px] 2xl:text-[150px] leading-[10rem]">
        Maximum <span className="text-darkGrey">efficiency</span> <br />
        with our intuitive
      </h1>

      <div>
        <div className="w-[100px] h-[100px] bg-offWhite rounded-full">
          <span className="bg-orange w-[40px] h-[40px] rounded-[10px]">
            <TiChartLine />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
