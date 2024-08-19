import { useEffect } from "react"
import { useMotionValue, motion, useSpring } from "framer-motion"

export const Cursor = () => {
    const smoothOptions = {damping: 20 , stiffness: 300, mass: 0.5}
    const mousePosition = {
        x : useMotionValue(0),
        y : useMotionValue(0),
    }
    const springMouse = {
        x : useSpring(mousePosition.x, smoothOptions),
        y : useSpring(mousePosition.y, smoothOptions),
    }
    useEffect(() => {
        const mouseChange = (e) => {
            const {clientX, clientY} = e;
            mousePosition.x.set(clientX - 20 / 2)
            mousePosition.y.set(clientY - 20 / 2)
        }
        window.addEventListener("mousemove", mouseChange)

        return () => window.removeEventListener("mousemove", mouseChange)
    })
  return (
    <motion.div style={{left: springMouse.x, top: springMouse.y}} className="fixed z-50 bg-black h-4 w-4 rounded-full"></motion.div>
  )
}
