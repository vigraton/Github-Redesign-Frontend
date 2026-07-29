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
  visibility,
  owner,
}: Repository) {
  const languageColor = LANGUAGE_COLORS[language] || null;
  const [starred, setStarred] = useState(false);

  function formateDate(date: string) {
    const dateStr = updated_at;
    const [year, month, day] = dateStr.split("T")[0].split("-");
    const formatted = `${day}/${month}/${year}`;

    if (date) {
      return formatted;
    }
  }

  return (
    <div
      className="flex flex-col gap-3 relative border-2 border-[#3d444d] bg-[#212830] rounded-2xl p-4 h-45 w-75"
      key={owner.login}>
      <div className="space-y-3">
        <div className="flex flex-row w-full items-top justify-between items-start">
          <h2 className="h-fit truncate max-w-60 text-nowrap text-[#418BE6] font-semibold text-[18px]">
            {name}
          </h2>

          {visibility === "private" ? (
            <GlobeLock className="text-[#3D444D]" />
          ) : (
            <Globe className="text-[#418BE6]" size={20} />
          )}
        </div>

        {
          <p className="text-[13px] font-normal text-[#a4a4a4] truncate">
            {description}
          </p>
        }

        <div className="flex flex-row ml-auto items-center text-sm text-[#9198A1] justify-between">
          <div className="flex flex-row gap-1 items-center">
            <span
              className="flex h-3 w-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: languageColor! }}></span>
            <p>{language}</p>
          </div>

          <p>{formateDate(updated_at)}</p>
        </div>
      </div>

      <button
        onClick={() => {
          setStarred(!starred);
        }}
        className={`${starred ? "bg-[#D29922]/20 border-[#D29922] text-[#D29922]" : "bg-[#212830] border-[#3d444d] text-[#9198A1]"} cursor-pointer flex flex-row bottom-4 items-center justify-between border-1 rounded-lg h-10 gap-2 max-w-fit p-2`}>
        {starred ? (
          <FaStar className="text-[#FFCC00] w-4.5 h-4.5" />
        ) : (
          <FaRegStar className="text-[#9198A1] w-4.5 h-4.5" />
        )}
        <span>{(stargazers_count ?? 0) + (starred ? 1 : 0)}</span>

        {/* Cagaio, acho que finalmente entendi ??. Se stargazers_count vir como null ou undefined da API, 
        então vai ficar como 0. Se estiver marcado então é contado + 1 */}
      </button>
    </div>
  );
}
