"use client"

import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const LANGUAGE_COLORS: Record<string, string> = {
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#b90003",
  C: "#555555",
  PHP: "#4F5D95",
  TypeScript: "#3178c6",
  Shell: "#89e051",
  Go: "#00d5ff",
}; // asmeeeeeiiiii <3

type RepoCardProps = {
  title: string;
  language: string;
  updatedAt: string;
  isPrivate?: boolean;
  className?: string;
};

export default function RepositoryCard({
  title,
  language,
  updatedAt,
  className = "",
}: RepoCardProps) {
  const languageColor = LANGUAGE_COLORS[language] || "#9198A1";

  const [starred, setStarred] = useState(false);

  const handleStarClick = () => {
    setStarred(!starred);
  }

  return (
    <div className="flex flex-col translate-y-44 border-2 border-[#3d444d] bg-[#212830] rounded-2xl h-50 w-80">
      <h2 className="h-fit p-2 text-[#418BE6] font-semibold text-2xl mt-5 ml-4">
        {title}
      </h2>

      <div className="absolute flex flex-row items-center place-items-start p-2 ml-4 mt-16 h-fit">
        <span
          className="flex h-3 w-3 rounded-lg"
          style={{ backgroundColor: languageColor }}
        ></span>
        <p className="text-[#9198A1] ml-1">{language}</p>
        <p className="text-[#9198A1] ml-3 text-nowrap">{updatedAt}</p>
      </div>

      <button
        onClick={handleStarClick}
        className="absolute cursor-pointer bottom-6 left-6 flex items-center gap-17 border-2 border-[#3d444d] bg-[#212830] rounded-lg h-10 w-[120px]"
      >
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
