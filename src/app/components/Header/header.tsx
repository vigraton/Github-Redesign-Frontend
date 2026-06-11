"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const nav_items = [
    {
      id: 1,
      nav: "Overview",
      ref: "/overview",
      icon: "/book_icon.svg",
      isActive: pathname === "/overview",
    },
    {
      id: 2,
      nav: "Repositories",
      ref: "/repositories",
      icon: "/repository_icon.svg",
      isActive: pathname === "/repositories",
    },
    {
      id: 3,
      nav: "Projects",
      ref: "/projects",
      icon: "/projects_icon.svg",
      isActive: pathname === "/projects",
    },
    {
      id: 4,
      nav: "Packages",
      ref: "/packages",
      icon: "/packages_icon.svg",
      isActive: pathname === "/packages",
    },
    {
      id: 5,
      nav: "Stars",
      ref: "/stars",
      icon: "/star.svg",
      isActive: pathname === "/stars",
    },
  ];

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
        {nav_items.map((item) => (
          <div key={item.id} className="flex flex-row items-center gap-4 text-muted">
            <img src={item.icon}>{item.icon}</img>
            <Link href={item.ref} className={`${item.isActive ? "border border-b-[#8A38F5]" : ""} cursor pointer`}>
              {item.nav}
            </Link>
          </div>
        ))}

        {/* <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730] [&.active]:border-b-2 [&.active]:border-orange-400 [&.active]:bottom-0 ${
            pathname === "#" ? "active" : ""
          }`}>
          Overview
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}
          data-active="true">
          Repositories
        </Link>
        <Link
          href="/repositories"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730] ${
            pathname === "/projects" ? "active" : ""
          }`}>
          Projects
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}>
          Packages
        </Link>
        <Link
          href="#"
          className={`text-white text-[14px] rounded-[6px] px-4 py-1 hover:bg-[#212730]`}>
          Stars
        </Link> */}

      </nav>
    </div>
  );
}
