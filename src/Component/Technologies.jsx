// import React from 'react';
// import { RiReactjsLine, RiHtml5Line, RiCss3Line } from "react-icons/ri";
// import { SiJavascript } from "react-icons/si"; 
// import { BsBootstrapFill } from "react-icons/bs";
// import { motion } from 'framer-motion';
// import { SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';


// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity, // Changed this to Infinity to make the animation repeat properly
//       repeatType: 'reverse',
//     },
//   },
// });

// export default function Technologies() {
//   return (
//     <div className='border-b border-neutral-800 pb-24'>
//       <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className='my-20 text-center text-4xl'>
//         Technologies
//       </motion.h1>

//       <motion.div
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className='flex flex-wrap items-center justify-center gap-4'>
        
//         <motion.div 
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className='rounded-2xl border-4 border-neutral-800 p-4'>
//           <RiReactjsLine className='text-7xl text-cyan-400' size={50} />
//         </motion.div>

//         <motion.div
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className='rounded-2xl border-4 border-neutral-800 p-4'>
//           <RiHtml5Line className='text-7xl text-orange-500' size={50} />
//         </motion.div>

//         <motion.div 
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className='rounded-2xl border-4 border-neutral-800 p-4'>
//           <RiCss3Line className='text-7xl text-blue-600' size={50} />
//         </motion.div>

//         <motion.div
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className='rounded-2xl border-4 border-neutral-800 p-4'>
//           <SiJavascript className='text-7xl text-yellow-500' size={50} />
//         </motion.div>

//         <motion.div
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className='rounded-2xl border-4 border-neutral-800 p-4'>
//           <BsBootstrapFill className='text-7xl text-purple-700' size={50} />
//         </motion.div>


//         <motion.div
//         variants={iconVariants(1)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p-4"
//       >
//         <SiMongodb className="text-7xl text-green-600" size={50} />
//       </motion.div>
        
//       <motion.div
//         variants={iconVariants(2)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p-4"
//       >
//         <SiExpress className="text-7xl text-gray-500" size={50} />
//       </motion.div>
//       <motion.div
//         variants={iconVariants(3)}
//         initial="initial"
//         animate="animate"
//         className="rounded-2xl border-4 border-neutral-800 p-4"
//       >
//         <SiNodedotjs className="text-7xl text-green-500" size={50} />
//       </motion.div>


      
//       </motion.div>
     
//     </div>
//   );
// }



import React from 'react';
import { RiReactjsLine, RiHtml5Line, RiCss3Line } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Row 1: Languages */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-7xl text-orange-500" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className="text-7xl text-blue-600" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" size={50} />
        </motion.div>
      </motion.div>

      {/* Row 2: Frameworks and Tools */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsBootstrapFill className="text-7xl text-purple-700" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-500" size={50} />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-green-500" size={50} />
        </motion.div>
      </motion.div>
    </div>
  );
}
