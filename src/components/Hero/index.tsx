import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
             Boost Your Influence with Real-Time Follower Insights
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
             Unlock powerful data to track, analyze, and grow your social media following. Perfect for marketers, brands, and creators who want to stay ahead..
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="x"
                    className="rounded-xs bg-[#F7941D] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#F7941D]"
                  >
               Get Started Free
                  </Link>
                  <Link
                    href="x"
                    className="inline-block rounded-xs bg-[#EC1C84] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#EC1C84] dark:bg-[#EC1C84] dark:text-white dark:hover:bg-white/5"
                  >
               See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>



{/*-----------------------------------img--------------------------------------------*/}


      </section>
    </>
  );
};

export default Hero;
