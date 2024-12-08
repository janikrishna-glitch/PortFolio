

import React from 'react'
import {FaLinkedin}from 'react-icons/fa'
import {FaGithub}from 'react-icons/fa'
import {FaResume}from 'react-icons/fa'
import {FaFile}from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav className =" mb-20 flex items-center justify-between py-6">

  <div className='flex flex-shrink-0 items-center'>
  <img className='mx-3 w-12' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///9FRUXFxcWvr68dHR3r6+uBgYH6+vppaWkVFRVsbGxKSkozMzPc3Nyenp709PTR0dGSkpKkpKS5ubnT09NPT09dXV3h4eEvLy/w8PAmJiZwcHBbW1sODg60tLSHh4eYmJh6eno9PT0aGhpbPD/EAAAFN0lEQVR4nO2d6XaqMBRGg7WAA5MVtXpb7fD+z3jV60AChADnAOF++1fXagzZChlPgnCy+Gk0C+bCXubBLEp8yUlk/g49m+UyeGGhoTvru2CELNy84VvfhSLmTTXc9l0icj4kw3jZd3kYmMQZwzEKCrF8Go7vFv3H9m44tkrmyds/Q7fvcjDiXg3H1A6qLC6GYd+lYCU8G3p9F4IVzxH+Z9+FYOXTF0nfZWAmFVHfRWAmEmOuSS8sRNB3EZgJxEgGvaWM3Q8AAAAAAAAAAAAAAAAAAAAAAEAZq8Q1ZZesI29CcM3Naprs5LyTFUG+Rfxx6pOsDm0uuTz6xfn+oZLK4jUQvBB+Nw0W2KTluTLEqr03FDyzjxpFlh21mb5TC4ppc0PH8U+1r/fj6rOckhtWXLAKt2Yo+UdlhuSG7QTPfJEKOs7wDJ0aUZBBSRU6cEPHfTW92K46M/qoUQJDJzYME4wM8voepKGzN6rjA4OcUnJBGkPHNWkZ9Q3hlV2rrhKnocnOgPfqaoZlD4x0hZVXxelrvSssaXVLfVI+EU+VvJk2MUkX/TH6SOAVdSwry5d08HsVIV3VeFi0VIrrVHdGPuWfvrvtIM0Mz72Tfc379EdKvG5X6jo0NRTiRVXUt4ryMJShziyjuWFuWKL/Xb6ySbvclNXC8Lnr+IZ2SCwlfmlT5Jq0MRRr2VD7JEq/uDWGyugy1iW11HAj/4gLTVJLDZXaRlfX2GoodzZ1rb6thkplo5m1sdZQnnnRjF+tNRSx4YNor6F0m2pmWew1XGUz2JWns9dQahI1bb69hvLCR3nX1F7DVymH39J0YzEsnxy21/Aw+rt0ks0gLp83tdfwO5uBpmNqr6FUcs2kvL2GrmHJrTWUm8NTPkEwu7KVpubS7SwP08lkbQ3lFbMP9d+z4jWAYvYsATVtDaWhxV5tLOrGQYQM5wa1NJT63bmhhfxfExgODmpneNAuRhisp+Wgj4pqZ6jM7Cs3qbqeZgJ9LdvKULkL1RF+bmXDAJ9K7EEbQzXmT63uNfFr5ZCZ3WlhqArmllsMFu5zMMdE1TLMPWW5xrBJXOeRTu1GU8ND7iErqCMMIoRU6E/wami4yjUEfkEQwERNVAlDr6aJ4SGKDcu2KUio40Qn9kC6wGb+WsFh8j0tDNgsGzedkti/Iif3Cwjfymd5qAyboxnc3xjGGnBzNpUXGsb4sDEGpzTabahb+71jtaHROZsWG8bVz+AFew1TwyreVkPfuBNiqeGLWbzmBSsNwzoxrxYaruvNb1pmuE9qv7vGGsPYTV9OHw025g3DsHJs8TtvPGU7DEOK7a9lwJANGJIBQzZgSAYM2YAhGTBkA4ZkwJANGJIBQzZgSAYM2YAhGTBkA4ZkwJANGJIBQzZgSAYM2YAhGTBkA4ZkwJANGJIBQzZgSAYM2YAhGb0ZZrdpxZynikpvmah1VH1Lsl8tw2b4J9I5NkwHRBSSPdeC6TDmG8eOvsocz7uH+XTm+eOBYH0aCrjvR2Z/Nj5vB0jvjN80QMYqcdOvLr7X7XG3W5tsdAMAAAAAAAAAAAAAAAAAAAAAAPB/0eBENauYC/qTv4dFIIzOhbWYhYj6LgIzkeg27Kh7UuEzvJNmQMx90eEL6PvAc0Snry/vnvBsaHSMuK0snIsh/ftMhoN7NeSOpuyRy3sWBH9EbH9snbthp8HG3bF0nobxGBUnccZwjDfq9mb22Ecxturm8TKX504Rd0zt4uK5PSS7FyasfX76QPHCjJW828cPo0Vgs+Y8WESJ/EKlv5eSOfyFTJFsAAAAAElFTkSuQmCC" alt='logo'></img>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a href="https://www.linkedin.com/in//jani-krishna-921072329" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/janikrishna-glitch" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    
  

<a href="https://drive.google.com/file/d/1H7SMez8ksQ-EhkUF3XdjIoDKzKE4a0NY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <FaFile />
</a>
    
</div>
    </nav>
  )
}


// import React from 'react';
// import { FaLinkedin, FaGithub, FaFile } from 'react-icons/fa';

// export default function Navbar() {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       {/* Logo or Branding */}
//       <h1 className="mx-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
//         JK
//       </h1>

//       {/* Social Links */}
//       <div className="flex items-center gap-6 text-3xl">
//         <a
//           href="https://www.linkedin.com/in//jani-krishna-921072329"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-blue-500 transition-colors"
//           aria-label="LinkedIn"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/janikrishna-glitch"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-400 transition-colors"
//           aria-label="GitHub"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://drive.google.com/file/d/1MJfvrHPK2Usd0-jpx-HgVJMeV4UCeahS/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-400 transition-colors"
//           aria-label="Resume"
//         >
//           <FaFile />
//         </a>
//       </div>
//     </nav>
//   );
// }
