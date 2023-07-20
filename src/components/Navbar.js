import { useState } from 'react'
import logo from '../images/LOGO.png'
import open from '../images/icon-hamburger.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import close from '../images/icon-close.svg'
import {Link }from "react-router-dom"
import  {Link as Lunk, animateScroll as scroll} from 'react-scroll'
import useWindowSize from '../hooks/UseWindowSize'
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const { width } = useWindowSize();
  const control = useAnimation();

    const [navbar, setNavbar] = useState('100%')
    const [navButton, setNavButton] = useState(false)
  const handleMenu = ()=> {
    setNavButton(true)
  } 
  const handleCloseMenu = ()=> {
    setNavButton(false)
  
  } 
 
  return (
    <nav className='flex justify-between md:justify-around md:items-center items-center max-h-[8vh] w-full p-[3%] fixed z-50 left-0 top-0 bg-white px-5 md:h-[2.5vh]'>
    <header className='h-[30px] w-[60px] md:h-[36px] md:w-[90px] '>
      <img src={logo} alt="logo" />   
    </header>
    <motion.ul 
    animate={control}
    className='flex-col justify-evenly absolute top-12 h-[50vh] list-none align-middle items-center w-full z-9 text-center bg-white md:hidden'
    style={{
      left: navbar
    }}
  
    >
      <Link to="/" onClick={()=>{handleCloseMenu()
      control.start({
        x: "100%",
        transition: { duration: 1 }
      })}}>
      <li className='block cursor-pointer text-xl text-bcolor my-2 py-2 font-semibold'>Home</li>
      </Link>
      
      <Link  to="/about"  onClick={()=>{handleCloseMenu()
      control.start({
        x: "100%",
        transition: { duration: 1 }
      })}}>
      <li className='block cursor-pointer text-xl text-bcolor my-2 py-2 font-semibold'>About Us</li>
      </Link>
      <Link  to="/service" onClick={()=>{handleCloseMenu()
      control.start({
        x: "100%",
        transition: { duration: 1 }
      })}}>
      <li className='block cursor-pointer text-xl text-bcolor my-2 py-2 font-semibold'>Our Services</li>
      </Link>
      <Link to="/contact" onClick={()=>{handleCloseMenu()
      control.start({
        x: "100%",
        transition: { duration: 1 }
      })}}>
      <li className='block cursor-pointer text-xl text-bcolor my-2 py-2 font-semibold'>Contact Us</li>
      </Link>
      <Link  to="/team" onClick={()=>{handleCloseMenu()
      control.start({
        x: "100%",
        transition: { duration: 1 }
      })
      }}>
      <li className='block cursor-pointer text-xl text-bcolor my-2 py-2 font-semibold'>The Team</li>
      </Link>

        <Lunk to='subscribe'
         spy={true} smooth={true} offset={-100} duration={900}  onClick={()=>{handleCloseMenu()
          control.start({
            x: "100%",
            transition: { duration: 1 }
          })
         }} >
        <button className='border-bcolor text-white border-2 bg-bcolor p-4 cursor-pointer rounded-md hover:bg-white hover:border-bcolor py-3 mt-3 text-lg font-bold  transition ease-in-out'>
        Subscribe 
      </button>
        </Lunk>
    </motion.ul>
    {width >768 ?
    <div className='flex justify-evenly items-center'>
      <ul className='flex list-none justify-center gap-12'>
      <Link to="/" onClick={()=>{handleCloseMenu()}}>
      <li className='ease-in-out cursor-pointer text-xl font-semibold text-bcolor my-2 py-1 hover:text-2xl'>Home</li>
      </Link>
      <Link  to="/about"  onClick={()=>{handleCloseMenu()}}>
      <li className='ease-in-out cursor-pointer text-xl font-semibold text-bcolor my-2 py-1 hover:text-2xl'>About Us</li>
      </Link>
      <Link  to="/service" onClick={()=>{handleCloseMenu()}}>
      <li className='ease-in-out cursor-pointer text-xl font-semibold text-bcolor my-2 py-1 hover:text-2xl'>Our Services</li>
      </Link>
      <Link to="/contact" onClick={()=>{handleCloseMenu()}}>
      <li className='ease-in-out cursor-pointer text-xl font-semibold text-bcolor my-2 py-1 hover:text-2xl'>Contact Us</li>
      </Link>
      <Link  to="/team" onClick={()=>{handleCloseMenu()}}>
      <li className='ease-in-out cursor-pointer text-xl font-semibold text-bcolor my-2 py-1 hover:text-2xl'>The Team</li>
      </Link>

        <Lunk to='subscribe'
         spy={true} smooth={true} offset={-100} duration={600}  onClick={()=>{handleCloseMenu()}} >
        <button className='border-bcolor border-2 bg-bcolor p-6 cursor-pointer rounded-md hover:text-bcolor hover:bg-white hover:border-bcolor py-2 text-lg font-bold tracking-wider text-white'>
        Subscribe 
      </button>
        </Lunk>
      </ul>
   
    </div>
    : "" }

    <div className='flex justify-center align-middle my-auto md:hidden hover:cursor-pointer' >
      {!navButton ? <GiHamburgerMenu onClick={()=> {
                      handleMenu()
                  control.start({
                        x: "-100%",
                        transition: { duration: 1 }
                      })
                  }} src={open} alt="open"
      className='text-bcolor h-6 w-6 '
      /> :
      <RxCross2 onClick={()=>  {
        handleCloseMenu()
        control.start({
          x: "100%",
          transition: { duration: 1 }
        })
    }}  src={close} alt="close" 
      className='text-bcolor h-6 w-6'
      />}
    </div>
  </nav>
  )
}
