import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function PJProjects({ id, data }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.9"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [id % 2 == 0 ? -300 : 300, 0]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  return (
    <motion.div
      style={{ translateX, translateY }}
      className="w-full aspect-video bg-greyal rounded-xl overflow-clip relative group/card"
      ref={ref}
    >
      <img
        src={data.image}
        alt=""
        className="w-full h-full object-cover origin-top object-top"
      />
      <div className="absolute w-full h-full bg-greyal bg-opacity-75 inset-0 flex flex-col p-16 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
        <div className="overflow-hidden h-fit">
          <h1 className="text-4xl font-bodoni font-bold text-whiteal translate-y-full group-hover/card:translate-y-0 transition-all duration-300 ">
            {data.title}
          </h1>
        </div>
        <div className="overflow-hidden mt-3">
          <div className="flex flex-row gap-2 translate-y-full group-hover/card:translate-y-0 transition-all duration-300 delay-150">
            {data.icons.map((k, i) => (
              <img src={k} alt="" className="w-5 h-5" key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
