import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-top z-30 flex justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* <motion.p
          className="text-9xl font-roslindale-bold text-whiteal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          MENU
        </motion.p> */}
      </motion.div>
      <motion.div
        className="fixed inset-0 h-screen w-full bg-greyal origin-bottom z-30 flex justify-center items-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
      >
        {/* <motion.p
          className="text-9xl font-roslindale-bold text-whiteal"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          MENU
        </motion.p> */}
      </motion.div>
      {children}
    </>
  );
};

export default Transition;
