"use client";

import { useForm } from "react-hook-form";
// import { useUser } from "../hooks/useUser";
import { userSchema, type UserSchemaType } from "./schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import LightRaysBackground from "@/app/components/Background/background";
import Image from "next/image";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: UserSchemaType) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const { getUsername } = useUser();

  // const handleUsername = () => {
  //   async (username: string) => {
  //     try {
  //       const response = await getUsername(username);
  //       console.log("RESPONSE: ", response);
  //       return response;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // };

  return (
    <div className="fixed inset-0 -z-10 bg-cover w-screen h-screen overflow-hidden text-white">
      <LightRaysBackground />

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-[250px] h-[250px] flex justify-center items-center flex-shrink-0 rounded-full overflow-hidden relative">
          <Image
            priority={true}
            fill
            alt="GitHub Symbol"
            src="/github-symbol.svg"
            className="object-cover"
          />
        </div>
        <div className="gap-4">
          <form
            className="w-full flex flex-col gap-4 bg-[#161b22]/80 backdrop-blur-sm border border-border rounded-xl p-6 text-white"
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-muted text-xl font-semibold text-center">
              Sign in to GitHub
            </h1>

            <input
              {...register("username")}
              name="username"
              className="border border-gray-30 rounded-md h-10 w-60 text-sm px-2"
              placeholder="Username"
              // value={}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}

            <input
              {...register("password")}
              type="password"
              className="border border-gray-300 rounded-md h-10 w-60 text-sm px-2"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}

            <Link href={"/repositories"}>
              <button
                type="submit"
                className="bg-[#02003A] cursor-pointer text-sm h-10 w-60 rounded-md shadow-[#8A38F5] hover:shadow-md transition-shadow duration-300">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
