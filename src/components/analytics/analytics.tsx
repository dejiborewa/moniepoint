import Button from "../button/button";
import { TbBrandDatabricks } from "react-icons/tb";
import { FaArrowCircleUp } from "react-icons/fa";

const Analytics = () => {
  return (
    <section className="w-auto h-screen rounded-[100px] bg-offWhite -mx-6 my-10 p-20 flex flex-col justify-around 2xl:px-[7.5rem]">
      <div className="flex justify-between items-center">
        <h1 className="leading-[2.7rem] text-[40px] font-[500]">
          Your key to strategic
          <br />
          success through analytics
        </h1>

        <p className="text-justify text-base">
          Ready for exciting, instantanous,
          <br />
          all-accessible insights in real time?
        </p>
      </div>

      <div className="flex items-center justify-between h-[350px] my-[4rem]">
        <div className="w-[50%] relative bg-white flex justify-between h-full p-8 rounded-[20px] border-[#ebebeb] border-2 my-10">
          <div className="w-[50%] flex flex-col justify-between 2xl:w-[30%]">
            <Button
              classname="bg-yellow shadow-md py-2 px-4 rounded-[10px] text-[14px] font-semibold w-max"
              text="Setting up reports"
            />

            <div>
              <h2 className="text-[24px] font-semibold">
                Fast and easy access to analytics
              </h2>

              <p className="text-darkGrey pt-4">
                One platform is a comprehensive system of solutions that will be
                the first step towards digitalization of your business!
              </p>
            </div>
          </div>

          <div className="w-[40%] rounded-tl-[20px] border-t-2 border-l-2 border-[#f4f4f4] p-4 flex flex-col justify-between gap-[1rem] absolute right-0 bottom-0 max-h-[350px]">
            <div>
              <h2 className="font-semibold">Sales statistic</h2>
              <div className="flex">
                <div className="flex items-center gap-[1rem] w-[60%]">
                  <div className="w-[40px] h-[40px] rounded-full bg-orange flex items-center justify-center">
                    <TbBrandDatabricks className="text-white font-bold shadow-orange w-[20px] h-[20px]" />
                  </div>

                  <div>
                    <span className="text-darkGrey text-[12px] font-semibold text-nowrap">
                      Total profit
                    </span>
                    <span className="block relative font-semibold text-[20px]">
                      $264,2k
                    </span>
                  </div>
                </div>

                <div className="bg-lightGrey rounded-[12px] py-2 px-3 w-[40%]">
                  <span className="text-[12px] font-semibold">Visitors</span>
                  <span className="block relative text-[20px]">
                    56k
                    <span className="flex text-green-500 absolute top-0 left-8 text-[8px]">
                      <FaArrowCircleUp className="text-green-500 text-sm" />
                      <span className="ml-1">14%</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <img src="/analytics.png" className="w-full max-h-[215px]" />
          </div>
        </div>

        <div className="w-[40%] bg-black rounded-[20px] text-center px-4 py-6 h-full flex flex-col justify-around">
          <div className="flex justify-center gap-[1rem]">
            <div className="bg-[#121111] border border-[#383535] p-8 flex flex-col gap-[1rem] justify-between rounded-[14px]">
              <span className="w-max mx-auto">
                <TbBrandDatabricks className="text-yellow w-[40px] h-[40px]" />
              </span>

              <span className="flex">
                <figure>
                  <img
                    src="/moniepoint.png"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </figure>

                <figure>
                  <img
                    src="/user.jpg"
                    className="w-[40px] h-[40px] rounded-full relative -left-2"
                  />
                </figure>
              </span>
            </div>

            <div className="bg-[#121111] border border-[#383535] p-8 flex flex-col justify-between rounded-[14px]">
              <span className="text-offWhite">Transactions</span>

              <span className="block relative text-[30px] text-offWhite w-max">
                56k
                <span className="flex text-green-500 absolute top-0 left-full text-[8px]">
                  <FaArrowCircleUp className="text-green-500 text-sm" />
                  <span className="ml-1">14%</span>
                </span>
              </span>
            </div>
          </div>

          <h3 className="text-offWhite font-bold text-[24px] py-4">
            Widget Control
          </h3>
          <p className="text-darkGrey w-[50%] mx-auto">
            Reports provide a comprehensive overview of important aspect of web
            analytics
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[3rem]">
        <div>
          <span className="text-[30px] mr-4">Up to</span>
          <span className="text-[50px] 2xl:text-[150px]">45%</span>
        </div>

        <span className="text-base">
          Increase your analytics efficiency by up to 45%. Unique
          <br />
          algorithms provide insights from data, reduce time for analysis
          <br />
          and save time for making important, informed decisions
        </span>
      </div>
    </section>
  );
};

export default Analytics;
