"use client";

import { useForm } from "react-hook-form";
import { userSchema, type UserSchemaType } from "./userValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.push("/repositories");
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/Cover.svg')" }}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-sm flex flex-col items-center gap-8">
          {/* Logo */}
          <Image src="/github.png" alt="GitHub logo" width={48} height={48} />

          {/* Form card */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl p-6"
          >
            <h1 className="text-foreground text-xl font-semibold text-center">
              Sign in to GitHub
            </h1>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-foreground text-sm">
                Username
              </label>
              <input
                {...register("username")}
                id="username"
                className="w-full bg-background border border-border rounded-md h-10 text-sm px-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Enter your username"
              />
              {errors.username && (
                <span className="text-danger text-xs">
                  {errors.username.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-foreground text-sm">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                className="w-full bg-background border border-border rounded-md h-10 text-sm px-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-danger text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-hover text-foreground cursor-pointer font-medium text-sm h-10 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
