import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover w-screen h-screen overflow-hidden"
      style={{ backgroundImage: "url('/Cover.svg')" }}
    >
      <form className="flex flex-col gap-4 justify-self-center mt-90">
        <input
          className="border border-gray-30 rounded-md h-10 w-60 text-sm px-2"
          placeholder="Username"
        />
        <input
          className="border boder-gray-300 rounded-md h-10 w-60 text-sm px-2"
          placeholder="Password"
        />

        <Link href={"/repositories"}>
          <button
            type="button"
            className="bg-[#02003A] cursor-pointer text-sm h-10 w-60 transition-colors rounded-md"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
