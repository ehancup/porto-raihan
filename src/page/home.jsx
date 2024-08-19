import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import people1 from "../assets/people2.png";
import avatar from "../assets/avatar.png";
import { RunninText } from "../components/runninText";
import { CircleSec1 } from "../components/circleSec1";
import { ReactTyped } from "react-typed";
import {
  EnvelopeIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { ProjectCard } from "../components/projectCard";
import { Loader } from "../components/loader";
import useLoad from "../hook/load";

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

  const setop = (value) => {
    op.set(value);
  };

  useEffect(() => {
    window.addEventListener('load' , () => {
    setTimeout(() => {
      loadDone();
    }, 3000);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("zustand===============");
  console.log(op);
  return (
    <div className="overflow-x-clip bg-whiteal relative">
      {/* <motion.div
        style={{ opacity: op }}
        className="h-full w-full bg-greyal absolute inset-0  "
      ></motion.div> */}
      <div
        className={`fixed h-screen w-full inset-x-0 ${
          isLoading
            ? "top-0 rounded-none"
            : "-top-[100vh] rounded-[0%0%50%50%/0%0%30%30%]"
        } grid place-items-center z-50 bg-greyal transition-all duration-700 md:duration-1000 ease-out`}
      >
        <Loader />
      </div>
      <div className="relative top-0">
        <div className="relative" ref={container}>
          <Section1 scrollYProgress={scrollYProgress} />
          <Section2 scrollYProgress={scrollYProgress} />
        </div>
        <div className="">
          <Section3 backgroundColor={backgroundColor} setop={setop} />
          <Section4 backgroundColor={backgroundColor} setop={setop} />
          <Trippy />
          <Horizontal />
          <Highlight />
          {/* <div className="h-screen"></div> */}
        </div>
      </div>
    </div>
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
      conRef.current.classList.remove('transition-all', 'duration-1000', 'ease-out')
    }, 1000)
  })
  return (
    <motion.section
      style={{ scale, rotate }}
      ref={conRef}
      className={`${isLoading ? 'h-[300vh] ' : 'h-screen'} transition-all duration-1000 ease-out  w-full  sticky top-0`}
    >
      <div className=" relative bottom-0 w-fit h-full left-1/2 -translate-x-1/2">
        <motion.img
          style={{ translateY }}
          src={people1}
          alt="person"
          className="h-full  object-cover"
        />
        <div className="absolute top-60 -left-20">
          <CircleSec1 text="Raihan Yusuf • ehancup •" size={200} />
        </div>
        <div className="absolute top-[25rem] -right-40 origin-left w-60">
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
  "Vocational School student majoring in Software Engineering. Individuals who are quick to learn, and reliable, Master several programming languages ​​and techniques in developing web-based or mobile applications.";
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
        <div className="flex-1 flex flex-col">
          <motion.div
            style={{ translateY: titleTransform }}
            className="w-fit h-fit relative"
          >
            <motion.div
              style={{ scaleX: containerProgress }}
              className="w-full scale-x-50 h-full bg-whiteal absolute origin-left  "
            ></motion.div>

            <h1 className=" text-4xl font-roslindale-reg text-greyal  w-fit mx-3 relative ">
              Raihan Yusuf Firmansyah
            </h1>
          </motion.div>
          <motion.div
            style={{ translateY: paragraphTransform }}
            className="flex flex-row flex-wrap items-center gap-x-3 justify-start text-whiteal text-5xl font-bodoni mt-5"
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
  "<h1>Fatum Brutum Amor Fati</h1> ipsum dolor sit amet consectetur adipisicing elit. Ex quod cumque, itaque distinctio dicta deleniti voluptas, non porro inventore ducimus nihil doloremque, ipsam odio. Laudantium necessitatibus atque esse dicta ad.";

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

  const currentIndex = useTransform(carouselProgress, [0, 1], [1, 157]);
  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        const canvasRatio = canvasRef.current.width / canvasRef.current.height;
        const imageRatio = images[index - 1].width / images[index - 1].height;
        canvasRef.current.imageSmoothingEnabled = true;

        canvasRef.current.width = images[index - 1].width;
        canvasRef.current.height = images[index - 1].height;

        console.log(imageRatio);
        console.log(canvasRatio);

        let drawWidth, drawHeight, offsetX, offsetY;

        // Sesuaikan ukuran gambar berdasarkan rasio aspek
        if (imageRatio > canvasRatio) {
          // Gambar lebih lebar dari kanvas
          drawWidth = canvasRef.current.width;
          drawHeight = canvasRef.current.width / imageRatio;
          offsetX = 0;
          offsetY = (canvasRef.current.height - drawHeight) / 2;
        } else {
          // Gambar lebih tinggi dari kanvas
          drawWidth = canvasRef.current.height * imageRatio;
          drawHeight = canvasRef.current.height;
          offsetX = (canvasRef.current.width - drawWidth) / 2;
          offsetY = 0;
        }

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
    "/icon/javascript-grey.svg",
    "/icon/typescript-grey.svg",
    "/icon/react-grey.svg",
    "/icon/nextjs-grey.svg",
    "/icon/nestjs-grey.svg",
    "/icon/kafka-grey.svg",
    "/icon/python-grey.svg",
    "/icon/mysql-grey.svg",
    "/icon/mongodb-grey.svg",
    "/icon/firebase-grey.svg",
    "/icon/docker-grey.svg",
  ];

  return (
    <motion.section
      style={{ backgroundColor }}
      className="h-[500vh] w-full relative"
      ref={carouselRef}
    >
      <div
        className="h-screen sticky top-0 flex flex-row items-center px-44 gap-20"
        ref={ref}
      >
        <div className="flex-1 flex flex-col">
          <div className="flex flex-row flex-wrap items-center gap-x-3 justify-start text-whiteal text-3xl font-bodoni">
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
          style={{ translateY: imageY }}
          className="w-96 aspect-[16/24] bg-whiteal overflow-hidden rounded-xl"
        >
          <canvas className="w-full h-full" ref={canvasRef}></canvas>
          {/* <motion.img src={currentImage} alt="" className="w-full" /> */}
        </motion.div>
      </div>
    </motion.section>
  );
}

function Section4({ backgroundColor, setop }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end center"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => setop(1 - e));
  });

  // const backgroundColor = useTransform(scrollYProgress, [0,1], ["#252222", "#f7f7ef"])
  return (
    <motion.section
      style={{ backgroundColor }}
      ref={ref}
      className="h-screen w-full"
    >
      <p className="text-5xl font-bold">test section</p>
    </motion.section>
  );
}
function Trippy() {
  const trippyRef = useRef(null);
  const bgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trippyRef,
    offset: ["start start", "end end"],
    // smooth: 20
  });
  const scale = useTransform(scrollYProgress, [0.02, 0.5, 1], [1, 50, 119]);
  const translateY = useTransform(scrollYProgress, [0.02, 1], [0, 4000]);
  const { scrollYProgress: bgYProgress } = useScroll({
    target: bgRef,
    offset: ["center end", "end end"],
  });
  return (
    <div className="h-[600vh] bg-gray-600 z-0 relative top-0 " ref={trippyRef}>
      <div
        className="h-screen bg-green-500 w-full sticky top-0  overflow-hidden"
        ref={bgRef}
      >
        <motion.div
          style={{ scale, translateY }}
          className="w-full h-full grid place-items-center"
        >
          <motion.p
            style={{ opacity: bgYProgress }}
            className="text-8xl text-center  text-red-700 font-roslindale-bold"
          >
            ENTER
            <br />
            PROJECTS
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

const WORDS =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod cumque, itaque distinctio dicta deleniti voluptas, non porro inventore ducimus nihil doloremque, ipsam odio. Laudantium necessitatibus atque esse dicta ad.";

function Highlight() {
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
    <div
      className="h-screen w-full bg-red-700 grid place-items-center"
      ref={element}
    >
      <div className="flex flex-row flex-wrap items-center gap-3 justify-start text-whiteal text-5xl font-bold font-bodoni">
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
    </div>
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

function Horizontal() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  return (
    <section className="h-[400vh] w-full relative" ref={targetRef}>
      <div className="h-screen w-full sticky top-0 flex items-center">
        <motion.div style={{ x }} className="flex flex-row gap-20 flex-nowrap">
          {Array.from({ length: 10 }, (_, i) => (
            <ProjectCard key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Home;