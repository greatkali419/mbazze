import Services from '../components/Services'
import {motion } from "framer-motion"

const Service = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0",
  transition: {
    duration: 1,
  }}}>
      <Services />
    </motion.div>
  )
}

export default Service