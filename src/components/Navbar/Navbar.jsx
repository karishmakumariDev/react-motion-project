import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className='top-0 left-0 z-40 absolute pt-0 w-full text-white'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
            className='font-semibold text-2xl uppercase'
          >
            <span className='text-primary'>Coders</span>coffee.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
            onClick={() => setSidebar(!sidebar)}
          >
            <GiHamburgerMenu
              className='text-3xl cursor-pointer'
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
