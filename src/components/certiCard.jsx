import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const CertiCard = ({data}) => {
  return (
    <a href={data.route} target="_blank" className="w-[800px] px-5 hover:px-10 transition-all duration-300 py-5   border-b-[1px] border-greyal relative group/certicard cursor-pointer">
      <div className="absolute inset-0 bg-greyal origin-bottom scale-y-0 group-hover/certicard:scale-y-100 transition-all duration-300 ease-out"></div>
      <div className="w-full h-full relative flex flex-row justify-between items-center ">
        <div className="flex flex-col gap-1">

        <p className="text-greyal group-hover/certicard:text-whiteal transition-colors duration-300  font-varela font-bold text-3xl ">{data.name}</p>
        <p className="text-greyal group-hover/certicard:text-whiteal group-hover/certicard:pl-10 pl-0 transition-all duration-300   text-xl leading-none ">{data.subname}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="h-5 text-greyal group-hover/certicard:text-whiteal transition-colors duration-300" />
      </div>
    </a>
  );
};
