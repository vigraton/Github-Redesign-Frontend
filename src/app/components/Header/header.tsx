import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#151b23] w-full h-28">
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

      <nav className="flex flex-row gap-8 pt-8">
        <Link href="#" className="text-white text-[14px] pl-6">
          Overview
        </Link>
        <Link href="#" className="text-white text-[14px]">
          Repositories
        </Link>
        <Link href="#" className="text-white text-[14px]">
          Projects
        </Link>
        <Link href="#" className="text-white text-[14px]">
          Packages
        </Link>
        <Link href="#" className="text-white text-[14px]">
          Stars
        </Link>
      </nav>
    </div>
  );
}
