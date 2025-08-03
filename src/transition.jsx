import { motion } from "framer-motion";

const Transition = ({children}) => {
    return (
        <> 
        
        <motion.div
            className="fixed inset-0 h-screen w-full bg-greyal origin-bottom z-30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
            className="fixed inset-0 h-screen w-full bg-greyal origin-top z-30"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        {children}
        </>
        
    )
}

export default Transition;