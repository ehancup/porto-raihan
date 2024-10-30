import {assets} from "../assets/projects/index";
import { Button } from "./btn";
import { motion } from "framer-motion";

export const ProjectCard = ({title, icons, image, route}) => {
  return (
    <motion.div initial={{opacity: 0, y: 150}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}} className="w-96 aspect-[16/18] bg-green-700 overflow-hidden rounded-xl relative group/pcard">
      <img
        src={image}
        alt=""
        className="w-full h-full origin-top scale-[2] group-hover/pcard:scale-100 transition-all duration-300"
      />
      <div className="absolute inset-0 bg-greyal/75 flex flex-col opacity-0 group-hover/pcard:opacity-100 transition-all duration-300">
        <div className="flex-1 w-full flex flex-col justify-center items-start px-6 gap-3">
          <div className="overflow-hidden ">
            <h1 className="text-4xl font-bodoni font-bold text-whiteal translate-y-full group-hover/pcard:translate-y-0 transition-all duration-300">
              {title}
            </h1>
          </div>
          <div className="overflow-hidden">
            <div className="flex flex-row gap-2 translate-y-full group-hover/pcard:translate-y-0 transition-all duration-300 delay-150">
              {
                icons.map((k,i) => (
                  <img src={k} alt="" className="w-5 h-5" key={i}/>
                ))
              }
            </div>
          </div>
        </div>
        <div className="my-5 mx-6 relative w-fit">
          <button className="relative  font-roslindale-reg px-0 group/pbutt hover:px-5 text-whiteal hover:text-greyal text-xl transition-all duration-300">
            <div className="absolute inset-0 w-full bg-whiteal origin-left scale-x-0 group-hover/pbutt:scale-x-100 transition-all duration-300"></div>
            <span className="relative opacity-75 group-hover/pbutt:opacity-100 transition-opacity duration-300">See Project</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
