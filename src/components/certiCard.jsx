import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const CertiCard = () => {
  return (
    <div className="w-[600px] px-5 hover:px-10 transition-all duration-300 py-5   border-b-4 border-greyal relative group/certicard">
      <div className="absolute inset-0 bg-greyal origin-bottom scale-y-0 group-hover/certicard:scale-y-100 transition-all duration-300 ease-out"></div>
      <div className="w-full h-full relative flex flex-row justify-between items-center">
        <p className="text-greyal group-hover/certicard:text-whiteal transition-colors duration-300  font-roslindale-reg text-3xl ">CertiCard</p>
        <ArrowTopRightOnSquareIcon className="h-5 text-greyal group-hover/certicard:text-whiteal transition-colors duration-300" />
      </div>
    </div>
  );
};
