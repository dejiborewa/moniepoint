import Menu from "../menu/menu";

const Data = () => {
  return (
    <section className="bg-offWhite h-[135vh] -mx-6 rounded-[100px] pl-10 py-20  2xl:pl-[7.5rem]">
      <div className="flex overflow-x-hidden">
        <div className="w-[50%] 2xl:w-[40%]">
          <div className="text-[80px] leading-[6rem]">
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

      <div className="h-max flex items-baseline font-semibold 2xl:tracking-[-1.5em] relative -top-[10vh]">
        <h1 className="lg:text-[300px] xl:text-[450px] 2xl:text-[620px]">R</h1>
        <h1 className="lg:text-[300px] xl:text-[450px] 2xl:text-[620px]">a</h1>
        <h1 className="lg:text-[300px] xl:text-[450px] 2xl:text-[620px]">m</h1>
        <h1 className="lg:text-[300px] xl:text-[450px] 2xl:text-[620px]">o</h1>
        <h1 className="lg:text-[300px] xl:text-[450px] 2xl:text-[620px]">s</h1>
      </div>
    </section>
  );
};

export default Data;
