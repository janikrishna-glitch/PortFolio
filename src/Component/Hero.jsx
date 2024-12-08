import { HERO_CONTENT } from '../Constant';
import React from 'react';
import { delay, motion } from "framer-motion"

const container=(delay) =>({
 hidden:{x:-100, opacity:0},
 visible:{
  x:0,
  opacity:1,
  transition:{duration:0.5, delay:delay}
 }
})
  


export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        {/* Left side content */}
        <div className='w-full lg:w-1/2 lg:pl-8'> {/* Added lg:pl-8 for left padding */}
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h4 
            variants={container(0.5)}
            initial="hidden"
             animate="visible" 
            className='pb-16 text-1xl font-thin tracking-light lg:mt-16 lg:text-5xl'>
              Krishna Jani
            </motion.h4>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-4xl tracking-tight text-transparent'>
              Full stack developer
            </motion.span>
            <motion.p 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='mt-4'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        
        {/* Right side content */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
            initial={{x:100, opacity:0}} 
            animate={{x:0 , opacity:1}}
            transition={{duration:1 , delay:1.2}}
  

              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIytfNMi5GehLIGcSc9KKTeIru5IzZFByGxfCT23wqwKCqyPc27Xzeebjvko16igozj_4&usqp=CAU' 
              alt='Jani Krishna' 
              className='w-full h-auto max-w-xs lg:max-w-sm rounded-lg shadow-lg object-cover' 
              style={{ objectFit: 'cover', maxHeight: '400px' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}




