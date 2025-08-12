import Image from "next/image";
import { FiEdit2 } from 'react-icons/fi';

export default function Profile() {
  return (
    <>
      <div className="flex rounded-full w-[300px] h-[300px]">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          alt="profile picture"
          width={300}
          height={300}
        />
      </div>
      <div className="justify-start">
        <div className="flex flex-row items-center gap-12">
          <h3 className="font-semibold text-[24px] pt-4">Vivian Graton</h3>
          <div className="pt-4">
            <button className="cursor-pointer items-center justify-center border border-[#3D444D] rounded-[6px] bg-[#2A313C] w-8 h-8">
              <FiEdit2 className="flex translate-x-1/2"/>
            </button>
          </div>
        </div>

        <p className="text-[#889099] text-[18px]">vigraton</p>
        <p className="pt-4">11 followers - 16 following</p>
        <p className="pt-4 text-[14px]">Valiant Group do Brasil</p>
        <p className="text-[14px]">SP, Brasil</p>
        <a className="text-[14px] cursor-pointer">
          https://www.figma.com/@viviangraton
        </a>
        <a className="text-[14px] cursor-pointer">vivian_graton</a>
        <br />
        <a className="text-[14px] cursor-pointer">in/vivian-graton-a3b451253</a>

        <div className="h-0.5 w-80 mt-8 bg-[#353C44]"/>
        <h4 className="font-semibold pt-6">Organizations</h4>
      </div>
    </>
  );
}
