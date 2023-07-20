import  {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useState } from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image8.jpg'
import image5 from '../images/iphone.jpg'
import image7 from '../images/image7.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'

export default function Teams() {

  return (
    <div>
    <div className="flex-col justify-center items-center w-full mt-[3.4rem] text-center bg-white text-black md:pt-20 md:px-14">
      <div className='flex-col p-5 '>
        <h1 className='block my-8 font-extrabold text-2xl text-bcolor md:text-4xl'>
        ME
        <span className='text-black'>
          E
        </span> 
        T 
        <span className='text-black mx-2'>
          THE
        </span> 
         TEA
         <span className='text-black'>
          M
        </span>
        </h1>
        <p className='flex my-12 p-2 rounded-2xl shadow-md  md:text-2xl md:text-center md:p-6  shadow-gray-300  text-center text-lg font-semibold tracking-wider'>
        At Mbazz , we have a talented team of professionals who are dedicated to delivering exceptional results 
        for our clients. Our team members are experts in their respective fields and bring a wealth of experience 
        to every project we undertake. Get to know the members of our team
        </p>
      </div>


        <div className="grid grid-flow-row md:grid-flow-col md:grid-rows-2">
        <div
         
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <div>
            
          </div>
          <div className='flex items-center'>
          <img
          src={image4}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />
          
          </div>
          
          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
              Comr. Nnamdi izuorah
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor ">
              Managing Director
            </h3>
          </div>
         
        </div>


        <div
         
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image3}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            Senior Dave
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Music Producer
            </h3>
          </div>
         
        </div>

        


        <div
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image10}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            Vanessa Ezenwafor
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Marketing and Communication strategist
            </h3>
          </div>
         
        </div>


        <div
         
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image11}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            
              Ujunwa Somtochukwu
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Non Executive Board Director
            </h3>
          </div>
         
        </div>

        <div
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image2}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            Local Rapper 
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Artiste
            </h3>
          </div>
         
        </div>


        <div
         
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image7}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            katchy
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Artiste
            </h3>
          </div>
         
        </div>


        <div
         
         className="flex-col justify-center items-center relative w-full my-[10%]">
          <img
          src={image1}
          alt='director'
          className="w-[70%] h-[350px] block mx-auto z-10 rounded-xl" />


          <div className=" relative block mx-auto w-[50%] -mt-[15%] z-20">
            <h2 className="text-xl tracking-wider bg-bcolor text-white  rounded-lg p-2">
            Osuji Chukwubikem
            </h2>
            <h3 className="text-lg italic mt-2 tracking-wider bg-white text-color p-2 shadow-sm shadow-bcolor  ">
            Brand Maven
            </h3>
          </div>
         
        </div>

        </div>
        

      <div className=" p-4 ">
        <h2 className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-2xl md:text-center md:p-6 font-semibold tracking-wider'>
        Our team is passionate about what we do, and we strive to exceed our clients' expectations with every 
        project. Contact us to learn more about how we can help your business succeed
        </h2>
      </div>


    </div>

    </div>
    
  )
}
