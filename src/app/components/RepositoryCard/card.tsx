"use client";

import { FaRegStar, FaStar } from "react-icons/fa6";
import { Globe, GlobeLock } from "lucide-react";
import { useState } from "react";
import { LANGUAGE_COLORS } from "./types";
import { Repository } from "./types";

export default function RepositoryCard({
  language,
  name,
  updated_at,
  description,
  stargazers_count,
}: Repository) {
  const languageColor = LANGUAGE_COLORS[language] || null;
  const [starred, setStarred] = useState(false);
  const isPrivate = useState(false);

  const handleStarClick = () => {
    setStarred(!starred);
  };

  return (
    <div className="flex flex-col relative border-2 border-[#3d444d] bg-[#212830] rounded-2xl p-4 h-45 w-75">
      <div className="space-y-3">
        <div className="flex flex-row items-top justify-between items-start">
          <h2 className="h-fit truncate text-wrap line-clamp-2 text-[#418BE6] font-semibold text-[18px]">
            {name}
          </h2>

          {!isPrivate ? (
            <GlobeLock className="text-[#3D444D]" />
          ) : (
            <Globe className="text-[#418BE6]" />
          )}
        </div>

        {
          <div>
            <p className="text-[13px] font-normal text-[#a4a4a4] truncate">
              {description}
            </p>
          </div>
        }

        <div className="flex flex-row items-center text-sm text-[#9198A1] justify-between">
          <span
            className="flex h-3 w-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: languageColor! }}></span>
          <p className="ml-1.5">{language}</p>
          <p className="ml-auto text-nowrap">{updated_at}</p>
        </div>
      </div>

      <button
        onClick={handleStarClick}
        className={`${starred ? "bg-[#D29922]/20 border-[#D29922] text-[#D29922]" : "bg-[#212830] border-[#3d444d] text-[#9198A1]"} cursor-pointer absolute flex bottom-4 items-center justify-between border-1 rounded-lg h-10 w-[55px]`}>
        {starred ? (
          <FaStar className="text-[#FFCC00] w-4.5 h-4.5 ml-2" />
        ) : (
          <FaRegStar className="text-[#9198A1] w-4.5 h-4.5 ml-2" />
        )}
        <span className="mr-2">{(stargazers_count ?? 0) + (starred ? 1 : 0)}</span>

        {/* Cagaio, acho que finalmente entendi ??. Se stargazers_count vir como null ou undefined da API, 
        então vai ficar como 0. Se estiver marcado então é contado + 1 */}

      </button>
    </div>
  );
}
