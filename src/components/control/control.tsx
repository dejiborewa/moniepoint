import Grid from "../lib/grid/grid";
import Revenue from "../lib/revenue/revenue";

const Control = () => {
  return (
    <section className="bg-white h-screen py-10 px-20">
      <h1 className="text-[50px] leading-[5rem] lg:text-[80px] 2xl:text-[150px] 2xl:leading-[10rem]">
        We give you full
        <br />
        <span className="text-darkGrey">control</span> over your data
      </h1>

      <div className="flex gap-[2rem] my-8 justify-between ">
        <Grid
          children={
            <div className="z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="flex relative -top-8">
                <div className="w-[200px] h-[215px] bg-white border-[0.5px] border-darkGrey p-4 rounded-[14px] text-center flex flex-col justify-around shadow-lg">
                  <p className="text-sm ">Conversion rate</p>
                  <div className="bg-yellow w-max mx-auto rounded-[14px] my-2">
                    <span className="text-[40px] p-4 font-semibold">2,3%</span>
                  </div>
                  <p className="text-grey text-xs">
                    Percentage of
                    <br /> web visitors
                  </p>
                </div>

                <div className="w-[200px] h-[215px] bg-white border-[0.5px] border-darkGrey p-4 rounded-[14px] flex flex-col justify-around relative -left-6 top-8 shadow-lg">
                  <p className="text-sm text-grey">Sales revenue</p>
                  <div className="my-2">
                    <span className="text-base font-semibold">
                      $&nbsp;131,2k
                    </span>

                    <div className="flex gap-1 my-2">
                      <div className="bg-green-500 h-[4px] w-full" />
                      <div className="bg-yellow h-[4px] w-full" />
                      <div className="bg-green-500 h-[4px] w-full" />
                    </div>

                    <Revenue />

                    <div className="flex justify-between pt-2 mt-2 border-t-[0.5px] border-darkGrey">
                      <span className="text-xs text-darkGrey">
                        Engagement rate
                      </span>
                      <span className="font-semibold text-xs">47,84%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h1 className="text-[20px] font-[500] my-4">
                  Improved customer service
                </h1>

                <p>
                  Analytics helps optimize service processes by providing
                  information on how to improve interactions with customers and
                  increase their satisfaction
                </p>
              </div>
            </div>
          }
        />

        <Grid
          children={
            <div className="z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <img src="/control.png" className="w-full" />

              <div className="text-center">
                <h1 className="text-[20px] font-[500] my-4">
                  Monitoring key indicators
                </h1>

                <p>
                  Analytics platform allow businesses to track KPIs, an
                  important tool for measuring success and achieving goals.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Control;
