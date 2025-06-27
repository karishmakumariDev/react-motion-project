import React from "react";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";
import { motion } from "framer-motion";
const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Chocolate",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "cold Coffee",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="space-y-4 my-16 container">
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1 }}
       className="space-y-4 mx-auto max-w-lg text-center">
        <h1 className="font-bold text-lightGray text-3xl">
          fresh and <span className="text-primary">Tasty</span>
        </h1>
        <p className="opacity-50 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem
          export dolorem fuga.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="space-y-6 p-4 text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 mx-auto h-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="font-bold text-primary text-2xl">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
