import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import people1 from "../assets/people2.png";
import hp from "../assets/hp.png";
import avatar from "../assets/avatar.png";
import { RunninText } from "../components/runninText";
import { CircleSec1 } from "../components/circleSec1";
import { ReactTyped } from "react-typed";
import {
  EnvelopeIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import "../App.css";
import { ProjectCard } from "../components/projectCard";
import { Loader } from "../components/loader";
import useLoad from "../hook/load";
import { projects } from "../data/projetcs";
import { CertiCard } from "../components/certiCard";
import useBlockScroll from "../hook/useBlockScroll";
import NewButt from "../components/newButt";
import { throttle } from "lodash";
import { certificates } from "../data/cetificate";
import transition from "../transition.jsx";

function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  document.title = "ehancup - the vintage programmer";

  // const op = useBgColor(state => state.op)
  const op = useMotionValue(0);
  const backgroundColor = useTransform(op, [0, 1], ["#252222", "#f7f7ef"]);

  const isLoading = useLoad((state) => state.isLoad);
  const loadDone = useLoad((state) => state.loadDone);
  const [blockScroll, allowScroll] = useBlockScroll();

  const setop = (value) => {
    op.set(value);
  };

  useEffect(() => {
    blockScroll();

    const loadFunc = () => {
      allowScroll();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      loadDone();
    };

    // const onLoad = () => {
    setTimeout(() => {
      allowScroll();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      loadDone();
    }, 3000);
    // };
    // window.addEventListener("load", onLoad);

    return () => {
      // window.removeEventListener("load", onLoad);
      // clearTimeout(loadDone)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("zustand===============");
  console.log(op);
  return (
    <motion.div className="" id="scrbr" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <div className="overflow-x-clip bg-whiteal relative ">
        {/* <motion.div
        style={{ opacity: op }}
        className="h-full w-full bg-greyal absolute inset-0  "
      ></motion.div> */}

        <div
          className={`fixed h-fit w-full inset-x-0 ${
            isLoading ? "top-0 " : "-top-[100vh] "
          } flex flex-col z-50  transition-all duration-700 md:duration-1000`}
        >
          <div className="w-full h-screen bg-greyal grid place-items-center">
            <Loader />
          </div>
          <div
            className={`w-full bg-greyal curve ${
              isLoading ? "h-40" : "h-0"
            } transition-all duration-700 md:duration-1000 ease-out`}
          ></div>
        </div>
        <div className="relative top-0 hidden md:block max-w-[1920px]">
          <div className="relative" ref={container}>
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
          </div>
          <div className="">
            <Section3 backgroundColor={backgroundColor} setop={setop} />
            <Section4 backgroundColor={backgroundColor} />
            <Trippy setop={setop} />
            <Horizontal backgroundColor={backgroundColor} setop={setop} />
            <Certificate backgroundColor={backgroundColor} />
            <Footer />
            {/* <div className="h-screen"></div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Section1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const conRef = useRef();

  const isLoading = useLoad((state) => state.isLoad);

  useEffect(() => {
    setTimeout(() => {
      conRef.current.classList.remove(
        "transition-all",
        "duration-1000",
        "ease-out"
      );
    }, 1000);
  });
  return (
    <motion.section
      style={{ scale, rotate }}
      ref={conRef}
      className={`${
        isLoading ? "h-[300vh] " : "h-screen"
      } transition-all duration-1000  w-full  sticky top-0`}
    >
      <div className=" relative bottom-0 w-fit h-full left-1/2 -translate-x-1/2">
        <motion.img
          style={{ translateY }}
          src={people1}
          alt="person"
          className="h-full  object-contain object-bottom max-w-[804px]"
        />
        <div className="absolute top-60 -left-20">
          <CircleSec1 text="Raihan Yusuf • ehancup •" size={200} />
        </div>
        <div className="absolute bottom-[25rem] -right-40 origin-left w-60">
          <motion.p
            style={{ rotate: rotate2 }}
            className="font-roslindale-reg text-5xl text-greyal leading-snug text-left origin-left"
          >
            I am A
            <br />
            <ReactTyped
              strings={["Programmer", "Video Editor"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.p>
        </div>
      </div>
      <RunninText />

      <div className="absolute top-10 left-10">
        <motion.p
          style={{ rotate: rotate2 }}
          className="font-varela leading-none"
        >
          &copy; ehancup 2024
        </motion.p>
      </div>
    </motion.section>
  );
}
const JIKON =
  "High school student in Software Engineering with a passion for web and mobile app development. Eager to learn and tackle new challenges in tech.";
function Section2({ scrollYProgress }) {
  const containerRef = useRef(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["0.5 end", "start start"],
  });
  const { scrollYProgress: paragraphProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.9], [-5, 0]);

  const paragraphTransform = useTransform(
    paragraphProgress,
    [0, 0.5, 1],
    [600, 0, -400]
  );
  const titleTransform = useTransform(
    paragraphProgress,
    [0, 0.5, 1],
    [400, 0, -600]
  );
  const pictureTransform = useTransform(
    paragraphProgress,
    [0, 0.5, 1],
    [200, 0, -200]
  );

  const words = JIKON.split(" ");
  return (
    <motion.section
      style={{ scale, rotate }}
      className="h-[calc(100vh+80px)] w-full bg-greyal relative pt-20   "
      ref={containerRef}
    >
      <div className="h-[100vh] w-full  flex flex-row items-center px-40 gap-20">
        <motion.div
          style={{ translateY: pictureTransform }}
          className="flex flex-col w-80"
        >
          <img src={avatar} alt="avatar" className="w-80" />
          <div className="flex flex-col text-whiteal mt-5 gap-2">
            <div className="flex flex-row items-center gap-2">
              <EnvelopeIcon className="h-5" />
              <p className="font-varela text-lg">mondokskuy19@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MapPinIcon className="h-5" />
              <p className="font-varela text-lg">South Tangerang, Indonesia</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DevicePhoneMobileIcon className="h-5" />
              <p className="font-varela text-lg">mondokskuy19@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <div className="flex-1 flex flex-col gap-3">
          <motion.div
            style={{ translateY: titleTransform }}
            className="w-fit h-fit relative"
          >
            <motion.div
              style={{ scaleX: containerProgress }}
              className="w-full scale-x-50 h-full bg-whiteal absolute origin-left  "
            ></motion.div>

            <h1 className=" text-5xl font-roslindale-reg text-greyal  w-fit mx-3 relative ">
              Raihan Yusuf Firmansyah
            </h1>
          </motion.div>
          <motion.div
            style={{ translateY: paragraphTransform }}
            className="flex flex-row flex-wrap items-center gap-x-3 gap-y-1 justify-start text-whiteal text-5xl font-bodoni mt-5"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  scrollYProgress={containerProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const CODING =
  "I can code in several languages and master several framework. So, just contact me if U need something";

function Section3({ backgroundColor, setop }) {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const canvasRef = useRef(null);
  // const setop = useBgColor(state => state.setop)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: paragraphProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: transProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: carouselProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });

  const words = CODING.split(" ");
  useEffect(() => {
    scrollYProgress.on("change", (e) => setop(e));
  }, [scrollYProgress, setop]);

  // const backgroundColor = useTransform(scrollYProgress, [0,1], ["#252222", "#f7f7ef"])
  const x = useTransform(carouselProgress, [0, 1], ["0%", "-170%"]);
  const imageY = useTransform(transProgress, [0, 1], [300, -300]);

  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 1; i <= 1253; i++) {
      const img = new Image();
      img.src = `/coding/${i}.webp`;
      img.className = "w-full h-full object-cover";
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  const currentIndex = useTransform(carouselProgress, [0, 0.8], [1, 157]);
  const transEl = useTransform(carouselProgress, [0.8, 0.95], ["100%", "0%"]);
  const transP = useTransform(carouselProgress, [0.8, 0.95], [500, 0]);
  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        canvasRef.current.imageSmoothingEnabled = true;

        canvasRef.current.width = images[index - 1].width;
        canvasRef.current.height = images[index - 1].height;

        canvasRef.current
          ?.getContext("2d")
          ?.drawImage(
            images[index - 1],
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
      }
    },
    [images]
  );

  // useMotionValue(currentIndex, 'change', (latest) => {
  //   render(Number(latest.toFixed()))
  //   console.log(latest);
  // })
  // const [currentImage, setImage] = useState('/coding/1.webp')
  // const indexImage = useMotionValue("/coding/1.webp");

  useEffect(() => {
    const img = new Image();
    img.src = `/coding/1.webp`;
    img.className = "w-full h-full object-cover";

    canvasRef.current.width = img.width;
    canvasRef.current.height = img.height;

    canvasRef.current
      ?.getContext("2d")
      ?.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
  }, []);

  useEffect(() => {
    currentIndex.on("change", (latest) => {
      console.log(latest);
      render(Number(latest.toFixed()));
      // setImage(`/coding/${Math.floor(latest)}.webp`);
      // indexImage.set(Math.floor(latest))
    });
  }, [currentIndex, render]);

  // let rilImg = indexImage.get()
  // console.log(rilImg);

  const icon = [
    "/icon/html-grey.svg",
    "/icon/css-grey.svg",
    "/icon/javascript-grey.svg",
    "/icon/typescript-grey.svg",
    "/icon/tailwind-grey.svg",
    "/icon/react-grey.svg",
    "/icon/nextjs-grey.svg",
    "/icon/nestjs-grey.svg",
    "/icon/go-grey.svg",
    "/icon/kafka-grey.svg",
    "/icon/python-grey.svg",
    "/icon/mysql-grey.svg",
    "/icon/mongodb-grey.svg",
    "/icon/firebase-grey.svg",
    "/icon/docker-grey.svg",
    "/icon/unity-grey.svg",
  ];

  return (
    <motion.section
      style={{ backgroundColor }}
      className="h-[500vh] w-full relative"
      ref={carouselRef}
    >
      <div
        className="h-screen sticky top-0 flex flex-row items-center px-44 gap-20 "
        ref={ref}
      >
        <motion.div
          style={{ scaleX: carouselProgress }}
          className=" origin-left absolute w-full top-0 h-2 bg-whiteal inset-x-0"
        ></motion.div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 justify-start text-whiteal text-5xl font-bodoni">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  scrollYProgress={paragraphProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </div>
          <div className="w-[484px] h-16 mt-10 overflow-hidden">
            <motion.div
              style={{ x }}
              className="w-full h-full flex flex-row flex-nowrap gap-5"
            >
              {icon.map((k, i) => (
                <div
                  className="p-1 h-full aspect-square bg-whiteal rounded-lg"
                  key={i}
                >
                  <div className="h-full w-full border-2 border-dashed rounded-md border-greyal p-3">
                    <img src={k} alt="svg" className="h-full w-full " />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          style={{
            translateY: imageY,
            backgroundImage: "url('/coding/1.webp')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="w-96 aspect-[16/24] bg-whiteal overflow-hidden rounded-xl relative"
        >
          <canvas className="w-full h-full" ref={canvasRef}></canvas>
          {/* <motion.img src={currentImage} alt="" className="w-full" /> */}
          <motion.div
            style={{ translateY: transEl }}
            className="absolute inset-0 bg-whiteal grid place-items-center"
          >
            <motion.p
              style={{ translateY: transP }}
              className="text-7xl font-roslindale-bold text-greyal text-center"
            >
              Trust <br />
              Me!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const EDIT = "I also can edit a video for you.";
function Section4({ backgroundColor }) {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress: carouselProgress } = useScroll({
    target: carouselRef,
    offset: ["start 0.7", "end 0.8"],
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: transP } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const words = EDIT.split(" ");
  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => setop(1 - e));
  // });
  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 1; i <= 94; i++) {
      const img = new Image();
      img.src = `/edit/${i}.webp`;
      img.className = "w-full h-full object-cover";
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  // const backgroundColor = useTransform(scrollYProgress, [0,1], ["#252222", "#f7f7ef"])
  const transImage = useTransform(transP, [0, 0.5, 1], [500, 0, -500]);
  const transText = useTransform(transP, [0, 0.5, 1], [300, 0, -300]);

  const currentIndex = useTransform(carouselProgress, [0, 1], [1, 94]);

  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        canvasRef.current.imageSmoothingEnabled = true;

        canvasRef.current.width = images[index - 1].width;
        canvasRef.current.height = images[index - 1].height;

        canvasRef.current
          ?.getContext("2d")
          ?.drawImage(
            images[index - 1],
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
      }
    },
    [images]
  );

  useEffect(() => {
    const img = new Image();
    img.src = `/edit/1.webp`;
    img.className = "w-full h-full object-cover";

    canvasRef.current.width = img.width;
    canvasRef.current.height = img.height;

    canvasRef.current
      ?.getContext("2d")
      ?.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
  }, []);

  useEffect(() => {
    currentIndex.on("change", (latest) => {
      render(Number(latest.toFixed()));
      // setImage(`/coding/${Math.floor(latest)}.webp`);
      // indexImage.set(Math.floor(latest))
    });
  }, [currentIndex, render]);
  return (
    <motion.section
      className="h-[100vh] w-full relative bg-red-500"
      ref={carouselRef}
    >
      <motion.div
        style={{ backgroundColor }}
        ref={ref}
        className="h-screen w-full top-0 sticky grid place-items-center"
      >
        {/* <motion.div
          style={{ scaleX: carouselProgress }}
          className=" origin-right absolute w-full top-0 h-2 bg-greyal inset-x-0"
        ></motion.div> */}
        <div className=" flex flex-col w-full items-center justify-center gap-10">
          <motion.div
            style={{ translateY: transText }}
            className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 justify-start text-greyal text-7xl font-roslindale-reg"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  scrollYProgress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </motion.div>
          <div className="w-full px-12 max-w-[965px]">
            <motion.div
              style={{
                translateY: transImage,
                backgroundImage: "url('/edit/1.webp')",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              className="aspect-video w-full bg-greyal rounded-xl overflow-hidden shadow-2xl"
            >
              <canvas className="w-full h-full" ref={canvasRef}></canvas>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
function Trippy({ setop }) {
  const trippyRef = useRef(null);
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trippyRef,
    offset: ["start start", "end end"],
    // smooth: 20
  });
  useEffect(() => {
    scrollYProgress.on("change", (value) => setop(1 - value));
  });
  const scale = useTransform(scrollYProgress, [0.02, 0.5, 1], [1, 50, 130]);
  const scaleLogo = useTransform(scrollYProgress, [0.02, 0.5, 1], [0, 0.5, 1]);
  const translateY = useTransform(scrollYProgress, [0.02, 1], [0, 4000]);
  const translateX = useTransform(scrollYProgress, [0.02, 1], [0, 38]);
  const translateYLogo = useTransform(scrollYProgress, [0.02, 1], [-4000, 0]);
  const translateXLogo = useTransform(scrollYProgress, [0.02, 1], [-48, 0]);

  const { scrollYProgress: bgYProgress } = useScroll({
    target: bgRef,
    offset: ["center end", "end end"],
  });
  return (
    <div className="h-[500vh] bg-gray-600 z-0 relative top-0 " ref={trippyRef}>
      <div
        className="h-screen bg-whiteal w-full sticky top-0  overflow-hidden"
        ref={bgRef}
      >
        <motion.div
          style={{ scale, translateY, translateX }}
          className="w-full h-full grid place-items-center"
        >
          <motion.p
            style={{ opacity: bgYProgress }}
            className="text-8xl text-center  text-greyal font-roslindale-bold"
          >
            ENTER
            <br />
            PROJECTS
          </motion.p>
        </motion.div>
        <div className="w-full h-screen absolute top-0 left-0 grid place-items-center">
          <motion.div
            className="h-96 w-96 origin-center"
            style={{ scale: scaleLogo }}
          >
            <img src={hp} alt="" className="h-full w-full object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const WORDS =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod cumque, itaque distinctio dicta deleniti voluptas, non porro inventore ducimus nihil doloremque, ipsam odio. Laudantium necessitatibus atque esse dicta ad.";

function Highlight({ backgroundColor }) {
  const element = useRef(null);
  const words = WORDS.split(" ");
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["center end", "start start"], // <of element> <of screen>
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  });
  return (
    <motion.div
      style={{
        backgroundColor,
      }}
      className="h-screen w-full grid place-items-center"
      ref={element}
    >
      <div className="flex flex-row flex-wrap items-center gap-3 justify-start text-greyal text-5xl font-bold font-bodoni">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              scrollYProgress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </div>
    </motion.div>
  );
}

function Word({ scrollYProgress, range, children }) {
  // console.log(range);
  // const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative ">
      <span className="absolute opacity-25 ">{children}</span>
      <span className="">
        {characters.map((character, i) => {
          const start = range[0] + step * i;
          const end = range[0] + step * (i + 1);
          return (
            <Character
              key={i}
              range={[start, end]}
              scrollYProgress={scrollYProgress}
            >
              {character}
            </Character>
          );
        })}
      </span>
    </span>
  );
}

function Character({ scrollYProgress, range, children }) {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <motion.span style={{ opacity }} className="">
      {children}
    </motion.span>
  );
}

function Horizontal({ backgroundColor, setop }) {
  const targetRef = useRef(null);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: carouselProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    carouselProgress.on("change", (e) => setop(e));
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  return (
    <section className="h-[400vh] w-full relative" ref={targetRef}>
      <motion.div
        style={{ backgroundColor }}
        className="h-screen w-full sticky top-0 flex items-center"
        ref={carouselRef}
      >
        <div className="flex flex-col gap-20 ">
          <div className="pl-44">
            <h1 className="text-white text-7xl font-roslindale-reg">
              My Projects
            </h1>
          </div>
          <motion.div
            style={{ x }}
            className="flex flex-row gap-20 flex-nowrap pl-24"
          >
            {projects.map((k, i) => (
              <ProjectCard key={i} {...k} />
            ))}
            <div className="w-96 aspect-[16/18] bg-whiteal rounded-xl group/project overflow-hidden ">
              <div className="h-96 aspect-[16/18] absolute flex justify-center items-center translate-x-0 group-hover/project:translate-x-96 transition-all duration-300">
                <p className="text-7xl font-roslindale-bold text-whiteal">
                  See All
                </p>
              </div>
              <div className="w-full h-full relative">
                <div className="w-full h-full bg-whiteal flex flex-col justify-center items-center translate-x-0 group-hover/project:translate-x-96 transition-all duration-300">
                  <p className="text-7xl font-roslindale-bold text-greyal">
                    See All
                  </p>
                </div>
                <div className="w-96 aspect-[16/18] rounded-xl bg-whiteal -translate-x-96 group-hover/project:translate-x-0 transition-all duration-300 absolute top-0 flex flex-col justify-center items-center">
                  <p className="text-7xl font-roslindale-bold text-greyal text-center">
                    Click <br />here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Certificate({ backgroundColor }) {
  return (
    <motion.section
      style={{ backgroundColor }}
      className="min-h-screen w-full px-44 pt-44 flex flex-row justify-between"
    >
      <div className="">
        <h1 className="font-roslindale-reg text-7xl text-greyal">
          Certificate
        </h1>
      </div>
      <div className="flex flex-col">
        {
          certificates.map((data, i) => <CertiCard data={data} key={i} />)
        }
      </div>
    </motion.section>
  );
}

function Footer() {
  const trippyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trippyRef,
    offset: ["start start", "end end"],
    // smooth: 20
  });

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
      // href: "/CV_RAIHAN.pdf",
    },
  ];

  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "33vh"]);
  const translateBottom = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const translateButton = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const borderButton = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const opacityButton = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleCurve = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 0 50vw 50vw / 0 0 30vh 30vh", "0 0 0 0 / 0 0 0 0"]
  );

  const buttonRef = useRef(null);
  const controls = useAnimation();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition((prev) => {
      console.log(prev);
      return { x: middleX, y: middleY };
    });
    // console.log({ middleX, middleY });
    // controls.start({ x: middleX, y: middleY });
  };

  const reset = () => {
    // x.set(0);
    // y.set(0);
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    // controls.start({ x: 0, y: 0 });
  };

  // const { x, y } = position;

  useEffect(() => {
    console.log("Position:", position);
    console.log("isHovered:", isHovered);
  }, [position, isHovered]);

  return (
    <div className="h-[200vh]" ref={trippyRef}>
      <div className="h-screen bg-greyal flex flex-col sticky top-0 ">
        <div className="absolute top-0 flex flex-col w-full z-10 h-fit ">
          <motion.div
            className=" w-full h-screen bg-whiteal flex items-center justify-center origin-top z-20  "
            style={{ height, borderRadius }}
          >
            <motion.p
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-8xl font-roslindale-reg text-greyal"
            >
              Let&apos;s work together!
            </motion.p>
          </motion.div>
          <motion.div
            style={{ height: scaleCurve }}
            className="w-full curve bg-whiteal origin-top drop-shadow-xl"
          ></motion.div>
        </div>
        <div className="flex-1"></div>
        <div className="flex-[2] flex flex-col justify-between px-20 py-10">
          <div className="flex flex-row pt-32 justify-center gap-10">
            <div className="flex flex-col w-fit">
              <p className="text-whiteal font-roslindale-reg text-8xl  pb-5 pr-32">
                Ways to <br />
                Get in touch
              </p>
              <motion.div
                style={{ translateY: borderButton }}
                className="w-full h-[2px] bg-whiteal/35"
              ></motion.div>
              <motion.div
                style={{ translateY: translateButton, opacity: opacityButton }}
                className="flex flex-row w-full gap-5 mt-5 "
              >
                <NewButt
                  title={"+62 812-9423-8988 (WA)"}
                  href={"https://wa.link/st3kww"}
                />
                <NewButt
                  title={"mondokskuy@gmail.com"}
                  href={"mailto:mondokskuy19@gmail.com"}
                />
              </motion.div>
            </div>

            <div className="">
              <motion.a
                href="/CV_RAIHAN.pdf"
                target="_blank"
                layout
                ref={buttonRef}
                // style={{ position: "relative", x, y }}
                // initial={{ x: 0, y: 0 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{
                  x: isHovered ? position.x : 0,
                  y: isHovered ? position.y : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                className="w-52 h-52 bg-whiteal/50 rounded-full relative group/rdbtn flex items-center justify-center"
              >
                <div className="absolute  h-full w-full bg-whiteal rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 origin-center scale-0 group-hover/rdbtn:scale-100 transition-all duration-300"></div>
                <motion.p
                  animate={{
                    x: isHovered ? position.x * 0.3 : 0,
                    y: isHovered ? position.y * 0.3 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  className="font-roslindale-reg text-greyal relative text-xl"
                >
                  download CV
                </motion.p>
              </motion.a>
            </div>
          </div>
          <motion.div
            className="flex flex-row w-full justify-between"
            style={{ translateY: translateBottom }}
          >
            <div className="flex flex-row gap-5">
              {footer.map((data, i) => (
                <div className="" key={i}>
                  <a
                    href={data.href}
                    target="_blank"
                    className=" text-whiteal opacity-50 font-varela hover:opacity-100 transition-opacity duration-150"
                  >
                    {data.title}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-whiteal/50 font-varela ">
              Copyright &copy; 2024 Raihan Ltd. All Right reserved
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Home;
