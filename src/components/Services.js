import Brand from '../images/brand.jpg'
import Artist from '../images/artist.jpg'
import real from '../images/real.jpg'
import events from '../images/event.jpg'
import digital from '../images/digital.jpg'
import  {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useState } from 'react'

export default function Services() {
  const {ref, inView} = useInView({
    threshold: 0.5
  })
  const animation = useAnimation()
  const animation1 = useAnimation()
  const animation2 = useAnimation()
  const control = useAnimation();

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
    if(inView) {
      animation2.start({
        y: 0,
        
      })
    }if(!inView) {
      animation2.start({
        y: [100,300,0,10,0]
      })
      

    }
  },[inView])
  return (
    <div>
<div className="flex-col w-full p-4 mt-14 text-center bg-black md:pt-20">
      <h1 className="block my-8 font-extrabold text-2xl text-bcolor  md:text-4xl">
     <span className='text-white mx-2'>
      OUR  
      </span>
       SERVICES
      </h1>
     <section className='md:grid md:grid-cols-5 gap-8 md:w-[90%] mx-auto '>
     <motion.div
         animate={animation}
         className='mt-24'>
      <div className='my-5 text-left'>
        <img
         src={Brand}
         alt='brand'
         className='md:h-[300px] md:rounded-2xl'  />

        <h2 className="font-bold text-2xl my-10 text-left text-color">
            Brand Management
          </h2>
      </div>
        
      <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor  ">
       
        <p className="text-white my-4 text-lg font-semibold md:text-2xl">
        Our brand management services help businesses establish, maintain and enhance 
        their brand identity. We work with you to develop a unique brand strategy that aligns with your business 
        goals and values, and then implement that strategy through various channels such as advertising, public 
        relations, social media, and content creation.
        </p>
      </div>
      </motion.div>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={Artist}
          alt='artist'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-semibold text-2xl my-10 text-color">
          Artiste Management
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="text-white my-4 text-lg font-semibold md:text-2xl">
          Our artiste management services are designed to help musicians, actors, and other 
          performers navigate the complex world of entertainment. We provide a range of services, including 
          contract negotiation, career planning, performance scheduling, and marketing and promotion. Our team 
          has extensive experience working with artists of all genres and can help you achieve your goals, whether 
          you're a newcomer to the industry or an established performer.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation2}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={events}
          alt='events'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-semibold text-2xl my-10 text-color">
          Event management
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="text-white my-4 text-lg font-semibold md:text-2xl">
          Our event management services cover everything from small business meetings to 
          large-scale corporate events and festivals. We take care of all the details, from venue selection and 
          logistics to catering and entertainment, so that you can focus on the content of your event. Our 
          experienced team has the expertise to create memorable and successful events that meet your objectives 
          and budget.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={real}
          alt='real'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-semibold text-2xl my-10 text-color">
          Real estate
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="text-white my-4 text-lg font-semibold md:text-2xl">
          Our real estate services help buyers, sellers, and investors navigate the complex world of 
          property transactions. We provide a range of services, including property valuation, market analysis, 
          property management, and legal assistance. Our team of experienced professionals has a deep 
          understanding of the real estate market and can help you make informed decisions.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={digital}
          alt='digital'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-semibold text-2xl my-10 text-color">
          Digital marketing
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="text-white my-4 text-lg font-semibold md:text-2xl">
          Our digital marketing services help businesses increase their online visibility and reach 
          their target audience through various digital channels, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing. We work with you to develop 
          a customized digital marketing strategy that aligns with your business goals and budget, and then 
          implement that strategy to drive traffic, leads, and conversions
          </p>
        </div>
        
      </motion.section>
     </section>
      
      
    </div>
    </div>
    
  )
}
