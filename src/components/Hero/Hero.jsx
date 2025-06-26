import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";

const bgImageStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  return (
    <main style={bgImageStyle}>
      <section className="w-full min-h-[750px]">
        <div className="container">
          {/* Navbar section */}
          <Navbar/>
          {/* Hero section */}
          <div className="place-items-center grid md:grid grid-cols-1-cols-2 lg:grid-cols-3 min-h-[850px]">
            <div className="space-y-28 mt-[100px] md:mt-0 p-4 text-lightOrange">
              <h1 className="ml-14 text-7xl leading-tight fon-bold">
                Blvck Tumbler
              </h1>

              {/* hero image section */}
              <div className="relative">
                <div className="z-10 relative space-y-4">
                  <h1 className="text-2xl">Black lifestyle lovers,</h1>
                  <h1 className="opacity-50 text-sm leading-loose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Delectus aspernature, cumque eos naque dolorem architecto
                    deserunt quis volupatinus in quisquamquis ducimus vitae,
                    adipisci unde ab, corrupti ullam veritatis alias!
                  </h1>
                </div>

                {/* third div section */}
                <div className="-top-6 -left-10 absolute bg-gray-700/25 w-[280px] h-[230px]"></div>
              </div>
            </div>

            {/* Hero image section */}
            <div className="relative">
              <img
                src={BlackCoffee}
                alt=""
                className="z-40 relative img-shadow h-[400px] md:h-[700px]"
              />
              <div className="top-24 -right-16 z-10 absolute border-[20px] border-primary rounded-full w-[180px] h-[180px]"></div>

              <div className="-top-20 left-[300px] z-[1] absolute">
                <h1 className="font-bold text-[140px] text-darkGray/40 leading-none scale-150">
                  Blvck Tumbler
                </h1>

                <div className="space-y-28 mt-[100px] md:mt-0 p-4 text-lightOrange">
                  <h1 className="opacity-0 ml-14 text-5xl leading-tight fon-bold">
                    Blvck Tumbler
                  </h1>

                  {/* hero image section */}
                  <div className="relative">
                    <div className="z-10 relative space-y-4">
                      <h1 className="text-2xl">Black Tumbler</h1>
                      <h1 className="opacity-50 w-[400px] text-sm leading-loose">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. 
                        Delectus aspernature, Delectus 
                        aspernature,Delectus 
                        aspernature,Delectus aspernature,

                      </h1>
                    </div>

                    {/* third div section */}
                    <div className="-top-6 -right-10 absolute bg-gray-700/25 w-[280px] h-[230px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
