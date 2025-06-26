import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImageStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImageStyle}>
      <section className="relative w-full min-h-[750px]">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="place-items-center grid md:grid grid-cols-1-cols-2 lg:grid-cols-3 min-h-[850px]">
            <div className="space-y-28 mt-[100px] md:mt-0 p-4 text-lightOrange">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="ml-14 font-bold text-7xl leading-tight"
              >
                Blvck Tumbler
              </motion.h1>

              {/* hero image section */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
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
              </motion.div>
            </div>

            {/* Hero image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="z-40 relative img-shadow h-[400px] md:h-[700px]"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="top-24 -right-16 z-10 absolute border-[20px] border-primary rounded-full w-[180px] h-[180px]"
              ></motion.div>

              <div className="-top-20 left-[300px] z-[1] absolute">
                <h1 className="font-bold text-[140px] text-darkGray/40 leading-none scale-150">
                  Blvck Tumbler
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="space-y-28 mt-[100px] md:mt-0 p-4 text-lightOrange"
                >
                  <h1 className="opacity-0 ml-14 text-5xl leading-tight fon-bold">
                    Blvck Tumbler
                  </h1>

                  {/* hero image section */}
                  <div className="relative">
                    <div className="z-10 relative space-y-4">
                      <h1 className="text-2xl">Blvck Tumbler</h1>
                      <h1 className="opacity-50 w-[400px] text-sm leading-loose">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Delectus aspernature, Delectus
                        aspernature,Delectus aspernature,Delectus aspernature,
                      </h1>
                    </div>

                    {/* third div section */}
                    <div className="-top-6 -right-10 absolute bg-gray-700/25 w-[280px] h-[230px]"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar section */}
        {sidebar && (
          <motion.div
            initial={{ x:"100%" }}
            whileInView={{x:0}}
            className="top-0 right-0 z-10 absolute bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm w-[140px] h-full"
          >
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex flex-col items-center gap-6 text-white">
                {/* Top line */}
                <div className="bg-white w-[1px] h-[70px]"></div>

                {/* Icons */}
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaTwitter />
                </div>
                <div className="inline-block p-2 border border-white rounded-full cursor-pointer">
                  <FaInstagram />
                </div>

                {/* Bottom line */}
                <div className="bg-white w-[1px] h-[70px]"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default Hero;
