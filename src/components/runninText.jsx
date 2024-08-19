import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const RunninText = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setDirection] = useState("left");
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      if (newScrollY > scrollY) {
        setDirection("right");
      } else if (newScrollY < scrollY) {
        setDirection("left");
      }
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  //   const directScroll = direction === "left" ?  ["0%", "-100%"] : ["-100%", "0%"]

  return (
    <motion.div
      className="flex flex-row flex-nowrap gap-20 absolute bottom-10 leading-none   font-roslindale-reg text-[300px]    text-whiteal font-outline"
      animate={{
        x: ["0%", "-100%"],
        // rotate: 30,
        transition: {
          ease: "linear",
          duration: 2000,
          repeat: Infinity,
        },
      }}
      // initial={{
      //   rotate: 30
      // }}
      // exit={{
      //   rotate: 30
      // }}
    >
      {Array.from({ length: 100 }, () => (
        <>
          <span className="">Raihan</span>
          <span className="">Yusuf</span>
          <span className="">Firmansyah</span>
          <span className="">-</span>
        </>
      ))}
    </motion.div>
  );
};
