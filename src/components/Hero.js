import  {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import {Link} from "react-router-dom"
import background from "../images/background.jpg"
import {useInView} from "react-intersection-observer"

export default function Hero() {
  const {ref, inView} = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  
  useEffect(()=>{
    if(inView) {
      animation.start({
        x: 0,
        
      })
    }if(!inView) {
      animation.start({
        x: [-100,-300,0,-10,0]
      })
      

    }
  },[inView])
  return (
    <div
    style={{
      backgroundImage: `url(${background})`,
      width: '100%',
      height: '100vh'
    }} className='bg-center bg-no-repeat relative'>
        <motion.div
         animate={animation}
        className='flex-col align-middle pt-24 md:pt-12 p-5 md:px-[8%]' >
            <h1 className=" pt-28 md:pt-56 text-[2.5rem] md:text-[3rem] md:pr-[45%] md:text-left text-bcolor font-extrabold"> Discover and explore The world of digital media marketing</h1>
            <h2 className="mt-8 md:mt-8 text-xl md:text-2xl text-white md:text-gray-100 md:hover:text-3xl font-extrabold md:pr-[25%] ">
              Our aim is to provide a platform for youngsters who are into entertainment and needs a platform to publicize themselves into the society
            </h2>
            <Link to='/about'>
            <button className='border-bcolor border-2 bg-bcolor p-4 md:p-6 md:px-10 cursor-pointer rounded-md hover:bg-white hover:border-bcolor py-3 mt-5 md:mt-10 text-lg md:text-xl font-bold'
            >
              Read More...
            </button>
            </Link>
        </motion.div>
    </div>
  )
}
