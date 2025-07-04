import { FaRegStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function RepositoryCard() {
  return (
    <div className="flex flex-col border-2 border-[#3d444d] bg-[#212830] rounded-2xl h-50 w-80">
      <h2 className="h-fit p-2 text-[#418BE6] font-semibold text-2xl mt-5 ml-4">
        Projeto
      </h2>
      <div className="absolute flex flex-row items-center place-items-start p-2 ml-4 mt-16 h-fit">
        <span className="flex h-3 w-3 rounded-lg bg-[#F1E05A]"></span>
        <p className="text-[#9198A1] ml-1">JavaScript</p>
        <p className="text-[#9198A1] ml-3 text-nowrap">
          Updated 37 minutes ago
        </p>
      </div>
      <button className="absolute flex flex-row place-items-start items-center gap-20 ml-4 mt-30 border-2 border-[#3d444d] bg-[#212830] rounded-lg h-10 w-30">
        <FaRegStar className="text-[#9198A1] w-5 h-5 gap-2 flex" />
        {/* <p className="text-[#9198A1]">Star</p> */}
        <IoMdArrowDropdown className="text-[#9198A1] w-5 h-5 gap-2 flex" />
      </button>
    </div>
  );
}
