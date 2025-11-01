import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <>
    {/* top */}
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-top z-30 flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890] }}
      >
      </motion.div>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-whiteal origin-top z-[31] flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890], delay: 0.1 }}
      >
      </motion.div>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-top z-[32] flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890], delay: 0.2 }}
      >
      </motion.div>

      {/* bottom */}
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-bottom z-30 flex justify-center items-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890],delay: 0.2}}
      >
      </motion.div>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-whiteal origin-bottom z-[31] flex justify-center items-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890], delay: 0.1 }}
      >

      </motion.div>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-bottom z-[32] flex justify-center items-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.935, 0.100, 0.095, 0.890]}}
      >

      </motion.div>
      {children}
    </>
  );
};

export default Transition;
