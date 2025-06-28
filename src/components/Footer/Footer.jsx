import React from 'react'
import { FaFacebook, FaGoogle,FaInstagram,FaPhone,FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import CreditCard from "../../assets/website/credit-cards.webp"
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {/* company detail section */}
                <motion.div 
                initial={{ opacity:0, y:100 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.5 }}
                transition={{ 
                    delay:0.4,
                    duration:0.6,
                }}
                className='space-y-6'>
                    <h1 className='font-bold text-3xl uppercase'>Coders Cafe</h1>
                    <p>Lorem ipsum dolor sit amet consectetue adipisicing elit. Eum earatione quidem libero, presentim ab atque? quidem maxime, numquam dolores</p>
                    <div>
                        <p className='flex items-center gap-2'>
                            <FaPhone/>
                            +1 (123) 456-7890
                        </p>
                        <p className='flex items-center gap-2 mt-2'>
                            {" "}
                            <FaMapLocation/> Noida, utter pradesh
                        </p>
                    </div>
                </motion.div>
                
                {/* footer link section */}
                 <motion.div 
                 initial={{ opacity:0, y:100 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.5 }}
                transition={{ 
                    delay:0.4,
                    duration:0.6,
                }}
                 className='space-y-6'>
                    <h1 className='font-bold text-3xl'>Quick Links</h1>
                        <div className='gap-3 grid grid-cols-2'>
                            <div>
                               <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>privacy policy</li>
                               </ul>
                            </div>

                            <div>
                               <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>privacy policy</li>
                               </ul>
                            </div>
                        </div>
                 </motion.div>

                 <motion.div 
                 initial={{ opacity:0, y:100 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, amount:0.5 }}
                transition={{ 
                    delay:0.4,
                    duration:0.6,
                }}
                 className='space-y-6'>
                    <h1 className='font-bold text-3xl'>Follow</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <h1 className='mb-2 font-semibold text-xl'>Payment Methods</h1>
                            <img src={CreditCard} alt="credit cards"  className='w-[80%]'/>
                        
                    </div>
                 </motion.div>
            </div>
            <p className='mt-8 pt-8 border-t-2 text-white text-center'>
             Copyright copy; 2024 Company Name. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer