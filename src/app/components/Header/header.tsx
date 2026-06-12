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
    <div className="bg-[#151b23] w-full h-28 fixed top-0 z-10 flex flex-col justify-between">
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

      <nav className="flex flex-row gap-4 ml-6">
        {nav_items.map((item) => (
          <div
            key={item.id}
            className={`${item.isActive ? "border-b-3 border-[#8A38F5]" : ""} rounded-tl-md rounded-tr-md flex flex-row items-center gap-2 p-2 hover:bg-[#8A38F5]/20`}>
            <img src={item.icon} />
            <Link href={item.ref} className="text-muted font-sans ">
              {item.nav}
            </Link>            
          </div>
        ))}
      </nav>
    </div>
  );
}
