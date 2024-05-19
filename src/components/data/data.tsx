// import useMeasure from "react-use-measure";
import Menu from "../lib/menu/menu";

const Data = () => {
  // const [ref, { width, height }] = useMeasure();

  // const cellWidth = 100;
  // const cellHeight = 100;

  // console.log(Math.floor(width / cellWidth), Math.floor(height / cellHeight));

  return (
    <section className="bg-offWhite h-[145vh] -mx-6 rounded-[100px] pl-20">
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

        <div className="w-[50%] relative left-[200px] 2xl:w-[60%]">
          <img src="/data.png" />
        </div>
      </div>

      <div className="h-max flex items-baseline font-semibold relative tracking-[-1.5em] 2xl:tracking-[-2em] text-orange">
        <h1 className="text-[100px] lg:text-[300px] xl:text-[450px] 2xl:text-[580px] leading-none">
          R
        </h1>
        <h1 className="text-[100px] lg:text-[300px] xl:text-[450px] 2xl:text-[580px] leading-none">
          a
        </h1>
        <h1 className="text-[100px] lg:text-[300px] xl:text-[450px] 2xl:text-[580px] leading-none">
          m
        </h1>
        <h1 className="text-[100px] lg:text-[300px] xl:text-[450px] 2xl:text-[580px] leading-none">
          o
        </h1>
        <h1 className="text-[100px] lg:text-[300px] xl:text-[450px] 2xl:text-[580px] leading-none">
          s
        </h1>
      </div>
    </section>
  );
};

export default Data;
