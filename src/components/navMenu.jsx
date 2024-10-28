import { motion } from "framer-motion";

let links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Certificates",
    href: "/",
  },
  {
    title: "Contacts",
    href: "/",
  },
];
let footer = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/hancup._/",
  },
  {
    title: "Github",
    href: "https://github.com/ehancup",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/raihan-yusuf-firmansyah-8156ab265/",
  },
  {
    title: "Twitter",
    href: "https://x.com/hancup_y",
  },
];

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -40,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35, delay: 0.5 + i * 0.1 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35, delay: 0.5 + i * 0.1 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

function NavMenu() {
  return (
    <div className="h-full pt-[100px] pb-[50px] px-10 box-border flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {links.map((link, i) => {
          return (
            <div
              className="[perspective:120px] [perspective-origin:bottom] group/navmenu w-fit"
              key={i}
            >
              <motion.div
                variants={perspective}
                custom={i}
                animate="enter"
                exit={"exit"}
                initial="initial"
                className=""
              >
                <a
                  href={link.href}
                  className="text-greyal no-underline text-5xl font-varela w-fit h-fit flex items-center justify-center group-hover/navmenu:[transform:rotateX(90deg)] transition-[transform] ease-[cubic-bezier(0.76,0,0.24,1)] duration-500 [transform-style:preserve-3d]"
                >
                  <span className="group-hover/navmenu:-translate-y-full group-hover/navmenu:opacity-0 transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-500 [transform-style:preserve-3d]">{link.title}</span>
                  <span className="absolute [transform:rotateX(-90deg)]  opacity-0 group-hover/navmenu:opacity-100 transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-500 [transform-style:preserve-3d]">{link.title}</span>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-y-2">
        {footer.map((foot, i) => {
          return (
            <motion.a
              key={i}
              variants={slideIn}
              animate="enter"
              exit={"exit"}
              initial="initial"
              custom={i}
              href={foot.href}
              target="_blank"
              className="w-1/2 font-varela"
            >
              {foot.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default NavMenu;
