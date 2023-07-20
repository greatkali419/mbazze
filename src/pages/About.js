import AboutUs from '../components/AboutUs'
import {motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0",
  transition: {
    duration: 1,
  }}}
    exit={{x: window.innerWidth}}
   >
      <AboutUs />
    </motion.div>
  )
}

export default About