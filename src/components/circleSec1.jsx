import { motion } from "framer-motion";
import disc from '../assets/disc1.png'
export const CircleSec1 = ({ text = "anything", size }) => {
  return (
    <div className="">
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          },
        }}
        className=" text-greyal relative"
        style={{
          height: size,
          width: size,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className={`font-bodoni`}
          height={size}
          width={size}
          fill="#252222"
        >
          <path
            id="circlePath"
            d="
        M 10, 50
        a 40,40 0 1,1 80,0
        40,40 0 1,1 -80,0
        "
            fill="none"
          />
          <text>
            <textPath
              href="#circlePath"
              className=""
              textLength={text.length * 10}
            >
              {text}
            </textPath>
          </text>
        </svg>
        <div className="w-full h-full absolute inset-0 p-5">
          <img src={disc} alt="disc" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};
