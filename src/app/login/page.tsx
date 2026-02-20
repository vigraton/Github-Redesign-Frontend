"use client";

import { useForm } from "react-hook-form";
import { userSchema, type UserSchemaType } from "./userValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

export default function LoginPage() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const onSubmit = (data: UserSchemaType) => {
  //   try {
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-cover w-screen h-screen overflow-hidden"
        style={{ backgroundImage: "url('/Cover.svg')" }}
      >
        <form
          className="flex flex-col gap-4 justify-self-center mt-90"
          //onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <input
              {...register("username")}
              name="username"
              className="border border-gray-30 rounded-md h-10 w-60 text-sm px-2"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              {...register("password")}
              type="password"
              className="border boder-gray-300 rounded-md h-10 w-60 text-sm px-2"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <Link href={"/repositories"}>
            <button
              type="submit"
              className="bg-[#02003A] cursor-pointer text-sm h-10 w-60 transition-colors rounded-md"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
