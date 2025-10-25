import { FaRegStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

type Project = {
  title: string,
  language: string,
  updated: string
};

export default function RepositoryCard({ title, language, updated }: Project) {
  return (
    <div className="flex flex-col translate-y-44 border-2 border-[#3d444d] bg-[#212830] rounded-2xl h-50 w-80">
      <h2 className="h-fit p-2 text-[#418BE6] font-semibold text-2xl mt-5 ml-4">
        {title}
      </h2>
      <div className="absolute flex flex-row items-center place-items-start p-2 ml-4 mt-16 h-fit">
        <span className="flex h-3 w-3 rounded-lg bg-[#F1E05A]"></span>
        <p className="text-[#9198A1] ml-1">{language}</p>
        <p className="text-[#9198A1] ml-3 text-nowrap">
          {updated}
        </p>
      </div>
      <button className="absolute flex flex-row place-items-start items-center gap-20 ml-4 mt-30 border-2 border-[#3d444d] bg-[#212830] rounded-lg h-10 w-30">
        <FaRegStar className="text-[#9198A1] w-5 h-5 gap-2 flex translate-x-2" />
        <IoMdArrowDropdown className="text-[#9198A1] w-5 h-5 gap-2 flex -translate-x-2" />
      </button>
    </div>
  );
}
