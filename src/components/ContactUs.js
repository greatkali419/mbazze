import {AiOutlineMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {FaAddressCard} from "react-icons/fa"
import  {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"

export default function ContactUs() {
  const {ref, inView} = useInView({
    threshold: 0.5
  })
  const animation = useAnimation()
  const animation1 = useAnimation()

  useEffect(()=>{
    if(inView) {
      animation.start({
        y: 0,
        
      })
    }if(!inView) {
      animation.start({
        y: [-100,-300,0,-10,0]
      })
      

    }
    if(inView) {
      animation1.start({
        y: 0,
        
      })
    }if(!inView) {
      animation1.start({
        y: [-100,-300,0,-10,0]
      })
    }
    },[inView])
  return (
    <div>
          <div className="bg-white text-black  mt-14 pt-12 md:pt-28">
      <div className='flex justify-center my-6'>
        <h1 className="text-2xl md:text-4xl font-extrabold">
          CONTACT <span className="text-bcolor"> US </span>
        </h1>
      </div>

        <div className='grid grid-flow-row md:grid-flow-col md:grid-cols-3 justify-center py-12 w-[90%] mx-auto gap-4'>
            <motion.section
         animate={animation}
         className="p-4 my-8 mx-4 shadow-lg shadow-[#0000002c] flex-col gap-4 rounded-xl hover:shadow-lg hover:shadow-bcolor border-2 border-bcolor">
                <FiPhoneCall className="h-10 w-10 my-6 mx-2"/>
                <div className="flex justify-between">
                <h3 className="text-lg font-semibold tracking-wider mx-2 my-2"> Call us now</h3>
                <div className="flex-col">
                <a className="text-bcolor block text-lg font-semibold tracking-wider" href='tel: +2347031447386'>
                  +2347031447386
                </a>
                <a 
                 className="text-bcolor block text-lg font-semibold tracking-wider"
                href='tel: +2348146462869'>
                  +2348146462869
                </a>
                </div>
                
                </div>
                
            </motion.section>

            <motion.section 
            animate={animation1}
            className="p-4 my-8 mx-4 shadow-lg shadow-[#0000002c] flex-col gap-4 rounded-xl hover:shadow-lg hover:shadow-bcolor  border-2 border-bcolor">
                <AiOutlineMail  className="h-10 w-10 my-6 mx-2 text-bcolor"/>
                <h3 className="text-lg font-semibold tracking-wider mx-2 my-2"> Send us an email</h3>
                <a
                 className="text-bcolor block text-lg font-semibold tracking-wider mx-2" 
                href='mailto: info@mbazempire.com'>
                 info@mbazempire.com
                </a>
            </motion.section>

            <motion.section
            animate={animation}
            className="p-4 my-8 mx-4 shadow-lg flex-col gap-4 rounded-xl hover:shadow-lg hover:shadow-bcolor  border-2 border-bcolor">
                  <FaAddressCard className="h-10 w-10 my-6 mx-2 text-bcolor" />
                  <h3 className="text-lg font-semibold tracking-wider mx-2 my-2">
                      Address
                  </h3>

                 
                  <article className="flex mx-2">
                      <p className="text-lg font-semibold tracking-wider mx-1 my-2 text-left">
                        Corporate Office  
                      </p>
                      <p  className="text-bcolor block text-lg font-semibold tracking-wider mx-2 text-right">
                      21 bourdilon Road ikoyi Lagos.
                      </p>
                  </article>

            </motion.section>
        </div >
      
    </div>
    </div>
  )
}
