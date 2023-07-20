import Teams from '../components/Teams'
import {motion } from "framer-motion"

const Team = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0",
  transition: {
    duration: 1,
  }}}>
      <Teams />
    </motion.div>
  )
}

export default Team