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
    }} className='bg-center bg-no-repeat relative bg-blend-darken'>
        <motion.div
         animate={animation}
        className='flex-col align-middle pt-24 md:pt-12 p-5 md:px-[8%]' >
            <h1 className=" pt-28 md:pt-56 text-[2rem] md:text-[2.5rem] md:pr-[45%] md:text-left text-bcolor font-extrabold">Business Development, Media, and
            Marketing Consultancy</h1>
            <h2 className="mt-8 md:mt-8 text-lg md:text-xl text-white md:text-gray-100 font-bold md:pr-[25%] ">
            At [M-bazz Empire], we specialize in
            providing comprehensive business
            development, media, and marketing
            consultancy services to help
            businesses thrive in today’s
            competitive landscape. With our
            expertise and strategic approach,
            we enable our clients to reach their
            target audience effectively, enhance
            brand visibility, and achieve
            sustainable growth.
            </h2>
            <Link to='/about'>
            <button className='border-bcolor border-2 bg-bcolor p-4 md:p-2 md:px-6 cursor-pointer rounded-md hover:bg-white hover:border-bcolor py-2 mt-5 md:mt-10 text-lg md:text-xl font-bold'
            >
              Read More...
            </button>
            </Link>
        </motion.div>
    </div>
  )
}
