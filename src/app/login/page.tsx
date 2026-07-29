"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { userSchema, type UserSchemaType } from "./schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import LightRaysBackground from "@/app/components/Background/background";
import Image from "next/image";
import { useUserContext } from "../context/UserContext";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
    },
  });

  const { fetchUsername, fetchUserRepos, isLoading } = useUserContext();

  const handleUsername = async (data: UserSchemaType) => {
    try {
      await fetchUsername(data.username);
      await fetchUserRepos(data.username)
            
      setUser(data.username);
      router.push("/repositories");

      return data;
    } catch (error) {
      console.error("FETCH ERROR: ", error);
    }
  };

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
            onSubmit={handleSubmit(handleUsername)}>
            <h1 className="text-muted text-xl font-semibold text-center">
              Sign in to GitHub
            </h1>

            <input
              {...register("username")}
              name="username"
              className="border border-gray-30 rounded-md h-10 w-60 text-sm px-2"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}

            <button
              type="submit"
              className="bg-[#02003A] cursor-pointer text-sm h-10 w-60 rounded-md shadow-[#8A38F5] hover:shadow-md transition-shadow duration-300">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
