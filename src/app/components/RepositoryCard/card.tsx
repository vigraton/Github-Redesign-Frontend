"use client";

import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Globe, GlobeLock } from "lucide-react";
import { useState } from "react";
import { LANGUAGE_COLORS } from "./types";
import { RepoCardProps } from "./types";

export default function RepositoryCard({ data }: RepoCardProps) {
  const languageColor = LANGUAGE_COLORS[data.language] || "#9198A1";
  const [starred, setStarred] = useState(false);
  const isPrivate= useState(false);

  const handleStarClick = () => {
    setStarred(!starred);
  };

  return (
    <div className="flex flex-col translate-y-44 border-2 border-[#3d444d] bg-[#212830] rounded-2xl h-45 w-75">
      <div className="flex flex-row items-top mt-4 justify-between">
        <h2 className="h-fit p-2 text-wrap line-clamp-2 text-[#418BE6] font-semibold text-[18px] ml-4">
          {data.name}
        </h2>

        {!isPrivate ? (
          <GlobeLock className="text-[#3D444D] mr-4" />
        ) : (
          <Globe className="text-[#418BE6] mr-4" />
        )}
      </div>

      <div className="flex flex-row items-center p-4 text-sm text-[#9198A1] mb-4 justify-between">
        <span
          className="flex h-3 w-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: languageColor }}></span>
        <p className="ml-1.5">{data.language}</p>
        <p className="ml-auto text-nowrap">{data.updatedAt}</p>
      </div>

      <button
        onClick={handleStarClick}
        className="absolute cursor-pointer bottom-6 left-6 flex items-center gap-17 border-2 border-[#3d444d] bg-[#212830] rounded-lg h-10 w-[120px]">
        {starred ? (
          <FaStar className="text-[#FFCC00] w-5 h-5 ml-2" />
        ) : (
          <FaRegStar className="text-[#9198A1] w-5 h-5 ml-2" />
        )}

        <IoMdArrowDropdown className="text-[#9198A1] w-5 h-5 gap-2 flex -translate-x-2" />
      </button>
    </div>
  );
}
