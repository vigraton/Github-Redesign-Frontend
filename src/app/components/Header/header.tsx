"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-[#151b23] w-full h-28 fixed top-0 z-10">
      <div className="flex flex-row justify-between items-center pl-6 pr-6 pt-4">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/github.png" alt="github icon" width={30} height={30} />
          <p className="text-white  text-[14px]">vigraton</p>
        </div>
        <Image
          className="flex rounded-full"
          src="/profile.jpg"
          alt="profile"
          width={35}
          height={35}
        />
      </div>

      <nav className="flex flex-row gap-2 pt-6 pb-2 pl-2">
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730] [&.active]:border-b-2 [&.active]:border-orange-400 [&.active]:bottom-0 ${
            pathname === "#" ? "active" : ""
          }`}
        >
          Overview
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}
        >
          Repositories
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730] ${
            pathname === "/projects" ? "active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}
        >
          Packages
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}
        >
          Stars
        </Link>
      </nav>
    </div>
  );
}
