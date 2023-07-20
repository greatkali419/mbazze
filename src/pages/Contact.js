import ContactUs from '../components/ContactUs'
import {motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0",
  transition: {
    duration: 1,
  }}}>
      <ContactUs />
    </motion.div>
  )
}

export default Contact