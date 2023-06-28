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

export default function Navbar() {
  const { width } = useWindowSize();

    const [navbar, setNavbar] = useState('-1444px')
    const [navButton, setNavButton] = useState(false)
  const handleMenu = ()=> {
    setNavbar('0px')
    setNavButton(true)
  } 
  const handleCloseMenu = ()=> {
    setNavbar('-1444px')
    setNavButton(false)
  
  } 
 
  return (
    <nav className='flex justify-between md:justify-around md:items-center items-center max-h-[10vh] w-full p-[3%] fixed z-50 left-0 top-0 bg-black px-5'>
    <header className='h-[36px] w-[90px] md:h-[42px] md:w-[100px] '>
      <img src={logo} alt="logo" />   
    </header>
    <ul 
    className='flex-col justify-evenly absolute top-14 h-[50vh] list-none align-middle w-full z-9 text-center bg-black py-5 md:hidden'
    style={{
      left: navbar
    }}
    >
      <Link to="/" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer text-2xl text-color my-2 py-1 font-semibold'>Home</li>
      </Link>
      <Link  to="/about"  onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer text-2xl text-color my-2 py-1 font-semibold'>About Us</li>
      </Link>
      <Link  to="/service" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer text-2xl text-color my-2 py-1 font-semibold'>Our Services</li>
      </Link>
      <Link to="/contact" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer text-2xl text-color my-2 py-1 font-semibold'>Contact Us</li>
      </Link>
      <Link  to="/team" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer text-2xl text-color my-2 py-1 font-semibold'>The Team</li>
      </Link>

        <Lunk to='subscribe'
         spy={true} smooth={true} offset={-100} duration={600}  onClick={()=>{handleCloseMenu()}} >
        <button className='border-bcolor border-2 bg-bcolor p-4 cursor-pointer rounded-md hover:bg-white hover:border-bcolor py-3 mt-3 text-lg font-bold'>
        Subscribe 
      </button>
        </Lunk>
    </ul>
    {width >768 ?
    <div className='flex justify-evenly items-center'>
      <ul className='flex list-none justify-center gap-12'>
      <Link to="/" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer md:text-2xl text-2xl font-semibold hover:text-white text-color my-2 py-1 hover:text-3xl'>Home</li>
      </Link>
      <Link  to="/about"  onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer md:text-2xl text-2xl font-semibold hover:text-white text-color my-2 py-1 hover:text-3xl'>About Us</li>
      </Link>
      <Link  to="/service" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer md:text-2xl text-2xl font-semibold hover:text-white text-color my-2 py-1 hover:text-3xl'>Our Services</li>
      </Link>
      <Link to="/contact" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer md:text-2xl text-2xl font-semibold hover:text-white text-color my-2 py-1 hover:text-3xl'>Contact Us</li>
      </Link>
      <Link  to="/team" onClick={()=>{handleCloseMenu()}}>
      <li className='cursor-pointer md:text-2xl text-2xl font-semibold hover:text-white text-color my-2 py-1 hover:text-3xl'>The Team</li>
      </Link>

        <Lunk to='subscribe'
         spy={true} smooth={true} offset={-100} duration={600}  onClick={()=>{handleCloseMenu()}} >
        <button className='border-bcolor border-2 bg-bcolor p-12 cursor-pointer rounded-md hover:text-bcolor hover:bg-white hover:border-bcolor py-3 mt-2 text-xl font-bold tracking-wider text-white'>
        Subscribe 
      </button>
        </Lunk>
      </ul>
   
    </div>
    : "" }

    <div className='flex justify-center align-middle my-auto md:hidden hover:cursor-pointer' >
      {!navButton ? <GiHamburgerMenu onClick={()=> {
        handleMenu()
      }} src={open} alt="open"
      className='text-bcolor h-8 w-8'
      /> :
      <RxCross2 onClick={()=> {
        handleCloseMenu()
      }}  src={close} alt="close" 
      className='text-bcolor h-8 w-8'
      />}
    </div>
  </nav>
  )
}
