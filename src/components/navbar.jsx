import { Buttnav } from "./buttnav"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import NavMenu from "./navMenu"

let variants = {
  open: {
    width : 480,
    height : 650,
    top: "-25px",
    right: "-25px",
    borderWidth : "4px",
    transition: {duration: 0.5, ease: [0.76,0,0.24,1]}
  },
  closed: {
    width : 100,
    height : 40,
    top: "0px",
    right: "0px",
    borderWidth : "0px",
    transition: {duration: 0.5,delay: 0.35, ease: [0.76,0,0.24,1]}
  }
}

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className="fixed top-10 right-10 z-10">
      <motion.div variants={variants} animate={isActive ? "open" : "closed"} initial="closed" className="w-[480px] h-[650px] bg-whiteal rounded-3xl relative border-4 border-greyal">
        <AnimatePresence>

        {isActive && <NavMenu/>}
        </AnimatePresence>
      </motion.div>
      <Buttnav isActive={isActive} setIsActive={setIsActive}/>
    </nav>
  )
}
