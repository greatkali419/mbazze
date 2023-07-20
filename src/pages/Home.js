import React from 'react'
import Hero from '../components/Hero'
import Why from '../components/Why'
import {motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0",
    transition: {
      duration: 1,
    }}}
    exit={{x: window.innerWidth}}
    >
      <Hero />
      <Why />
    </motion.div>
  )
}

export default Home