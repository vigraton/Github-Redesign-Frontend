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
    <div className="flex-start grid grid-cols-1">
      <div className="flex rounded-full w-[250px] h-[250px]">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          alt="profile picture"
          width={250}
          height={250}
        />
      </div>

      <div className="justify-start fit-content">
        <div className="flex flex-row items-center gap-[20px]">
          <h3 className="font-semibold text-[24px] pt-4">{name}</h3>
          <div className="pt-4">
            <button className="cursor-pointer items-center justify-center border border-[#3D444D] rounded-[6px] bg-[#2A313C] w-8 h-8">
              <FiEdit2 className="translate-x-1/2" />
            </button>
          </div>
        </div>

        <p className="text-[#889099] text-[18px]">{username}</p>
        <p className="pt-4">{followers} followers - {following} following</p>
        <p className="pt-4 text-[14px]">{company}</p>
        <p className="text-[14px]">{location}</p>
        <a className="text-[14px] cursor-pointer" href="https://www.figma.com/@viviangraton">
          https://www.figma.com/@viviangraton
        </a>
        <br />
        <a className="text-[14px] cursor-pointer" href="https://www.linkedin.com/in/vivian-graton-a3b451253/">in/vivian-graton-a3b451253</a>

        <div className="h-0.5 w-80 mt-8 bg-[#353C44]" />
        <h4 className="font-semibold pt-6">Organizations</h4>
      </div>
    </div>
  );
}
