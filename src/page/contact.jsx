import { useRef } from "react";
import { Footer } from "./home";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_MAIL_SERVICE_ID,import.meta.env.VITE_MAIL_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email Sent!", {
            style: {
              color: "#f7f7ef",
              background: "#252222",
            },
            iconTheme: {
              primary: "#f7f7ef",
              secondary: "#252222",
            },
          });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  })

  const trKata = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const grKata = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="flex flex-col" >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-row gap-20 items-center justify-center h-screen bg-whiteal" ref={ref}>
        {/* <h1 className="text-4xl font-bold text-greyal">Contact Page</h1> */}
        <motion.div className="" style={{translateY: trKata}}>
          <p className="text-9xl font-monsieur">Feel free <br />to email me</p>
        </motion.div>
        <motion.div className="h-96 w-1 bg-greyal" style={{translateY: grKata}}></motion.div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-[500px]"
        >
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-5 group md:col-span-2">
              <input
                type="email"
                name="email"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-greyal appearance-none  dark:focus:border-greyal focus:outline-none focus:ring-0 focus:border-greyal peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-xl text-greyal duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-greyal peer-focus:dark:text-greyal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-greyal appearance-none  dark:focus:border-greyal focus:outline-none focus:ring-0 focus:border-greyal peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-xl text-greyal duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-greyal peer-focus:dark:text-greyal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div class="w-full mb-4 border-2 border-greyal rounded-lg bg-whiteal ">
            <div class="px-4 py-2 bg-whiteal rounded-t-lg">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                class="w-full px-0 text-xl text-greyal bg-whiteal border-0  focus:ring-0  border-none focus:outline-none"
                placeholder="Write a message..."
                name="message"
                required
              ></textarea>
            </div>
            <div class="flex items-center justify-end px-3 py-2 border-t bg-greyal border-gray-200">
              <button
                type="submit"
                value="Send"
                class="inline-flex items-center py-2.5 px-4 text- font-medium text-center text-greyal bg-whiteal rounded-lg focus:ring-4 focus:ring-whiteal  hover:bg-whiteal/75"
              >
                Send Email
              </button>
              
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
