import { motion } from "framer-motion";

export const Buttnav = ({ isActive, setIsActive }) => {
  return (
    <div
      className="h-10 w-[100px] rounded-3xl  overflow-hidden absolute top-0 right-0 cursor-pointer  "
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="relative h-full w-full  "
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{duration: 0.5, ease: [0.85, 0, 0.15, 1]}}
      >
        <div className="h-full w-full bg-whiteal text-greyal flex items-center justify-center group/butnav ">
          <PerspectiveText label={"MENU"}/>
          {/* <div className="w-full h-full flex items-center justify-center">
      <p className="">Menu</p>
      <p className="absolute [transform:rotateX(-90deg)] group-hover/butnav:[transform:rotateX(90deg)] transition-[transform] ease-[cubic-bezier(0.76,0,0.24,1)] duration-[0.75s] [transform-style:preserve-3d] ">Menu</p>
    </div> */}
        </div>
        <div className="absolute top-full bg-greyal text-whiteal h-full w-full flex items-center justify-center group/butnav ">
          <PerspectiveText label={"CLOSE"}/>
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({label}) {
  return (
    <div className="w-full h-full flex items-center justify-center group-hover/butnav:[transform:rotateX(90deg)] transition-[transform] ease-[cubic-bezier(0.76,0,0.24,1)] duration-[0.75s] [transform-style:preserve-3d]">
      <p className="font-roslindale-reg text-2xl uppercase group-hover/butnav:-translate-y-full group-hover/butnav:opacity-0 transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-[0.75s] [transform-style:preserve-3d]">{label}</p>
      <p className="font-monsieur text-2xl uppercase absolute [transform:rotateX(-90deg)]  opacity-0 group-hover/butnav:opacity-100 transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-[0.75s] [transform-style:preserve-3d]">{label}</p>
    </div>
  )
}