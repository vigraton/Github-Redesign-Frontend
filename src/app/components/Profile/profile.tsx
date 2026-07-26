"use client";

import { FiEdit2 } from "react-icons/fi";
import { useUserContext } from "@/app/context/UserContext";

export default function Profile() {
  const { profile } = useUserContext();

  return (
    <div className="flex flex-col gap-6 ml-30" key={profile?.id}>
      {profile?.avatar_url && (
        <div className="w-[250px] h-[250px] flex-shrink-0">
          <img
            className="rounded-full object-cover"
            src={profile?.avatar_url}
            alt="profile picture"
            width={250}
            height={250}
          />
        </div>
      )}

      <div className="flex flex-col text-white">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-[24px] pt-4">{profile?.name}</h3>
          <div className="pt-4">
            <button className="cursor-pointer items-center justify-center border border-[#3D444D] rounded-[6px] bg-[#2A313C] w-8 h-8">
              <FiEdit2 className="flex items-center justify-self-center" />
            </button>
          </div>
        </div>

        <p className="text-[#889099] text-[18px]">{profile?.login}</p>
        <p className="pt-4">
          {profile?.followers} followers · {profile?.following} following
        </p>

        <div className="flex flex-col gap-1">
          <p className="pt-4 text-[14px]">{profile?.company}</p>
          <p className="text-[14px]">{profile?.location}</p>
        </div>

        <div className="h-0.5 w-65 mt-8 bg-[#353C44]" />
        <h4 className="font-semibold pt-6">Organizations</h4>
      </div>
    </div>
  );
}
