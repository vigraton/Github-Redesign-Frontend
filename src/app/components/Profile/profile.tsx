import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";

type ProfileProps = {
  name: string;
  username: string;
  followers: number;
  following: number;
  company: string;
  location: string;
};

export default function Profile({
  name,
  username,
  followers,
  following,
  company,
  location,
}: ProfileProps) {
  return (
    <div className="flex flex-col gap-6 ml-30 mt-40 mb-60">
      <div className="w-[250px] h-[250px] flex-shrink-0">
        <Image
          className="rounded-full object-cover"
          src="/profile.jpg"
          alt="profile picture"
          width={250}
          height={250}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-[24px] pt-4">{name}</h3>
          <div className="pt-4">
            <button className="cursor-pointer items-center justify-center border border-[#3D444D] rounded-[6px] bg-[#2A313C] w-8 h-8">
              <FiEdit2 className="flex items-center justify-self-center" />
            </button>
          </div>
        </div>

        <p className="text-[#889099] text-[18px]">{username}</p>
        <p className="pt-4">{followers} followers - {following} following</p>
        <p className="pt-4 text-[14px]">{company}</p>
        <p className="text-[14px]">{location}</p>
        <a className="text-[14px] cursor-pointer hover:underline" href="https://www.figma.com/@viviangraton">
          https://www.figma.com/@viviangraton
        </a>
        <br />
        <a className="text-[14px] cursor-pointer hover:underline" href="https://www.linkedin.com/in/vivian-graton-a3b451253/">in/vivian-graton-a3b451253</a>

        <div className="h-0.5 w-80 mt-8 bg-[#353C44]" />
        <h4 className="font-semibold pt-6">Organizations</h4>
      </div>
    </div>
  );
}
