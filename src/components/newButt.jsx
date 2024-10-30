// import React from "react"
const NewButt = ({title, href}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full relative flex items-center bg-greyal justify-center   px-5 py-3 overflow-hidden rounded-full group transition-all duration-500 ease-in-out hover:bg-whiteal"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-whiteal opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-whiteal opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative  font-varela text-left text-whiteal transition-colors duration-200 ease-in-out group-hover:text-greyal">
        {title}
      </span>
      <span className="absolute inset-0 border border-whiteal rounded-full"></span>
    </a>
  );
};

export default NewButt;
