import React from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";
const WhereToBuy = () => {
  return (
    <div className="my-36 container">
      <div className="place-items-center gap-8 grid grid-cols-1 sm:grid-cols-3">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="font-sarif font-bold text-darkGray text-4xl"
          >
            Buy our products from anyewhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="flex gap-4"
          >
            {/* Bada input */}
            <input
              type="text"
              placeholder="Name"
              className="w-[150px] w-full input-style"
            />

            {/* Chota input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full input-style"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="flex gap-4 mt-4"
          >
            {/* Bada input */}
            <input
              type="text"
              placeholder="Country"
              className="w-full input-style"
            />

            {/* Chota input */}
            <input
              type="text"
              placeholder="Zipcode"
              className="w-[150px] input-style"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="w-full primary-btn"
          >
            Order Now
          </motion.button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            src={WorldMap}
            alt=""
            className="w-full sm:w-[500px] max-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
