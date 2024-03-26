"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthenticationRequests } from "@/utils/http_request/auth.requests";
import { useRouter } from "next/router";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // const router = useRouter();
  let password;
  const getCharacterValidationError = (string) => {
    return `Your password must have at least 1 ${string} character`;
  };

  const schema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(20, "Password cannot exceed more than 12 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(20, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  password = watch("password", "");
  const onSubmit = async (data) => {
    if (data) {
      const resData = await AuthenticationRequests.register(
        {
          full_name: data.full_name,
          username: data.username,
          email: data.email,
          password: data.password,
        },
        setIsLoading
      );
      if (resData.message === "signed up successful") {
        // router.push("/dashboard");
      }
      console.log(resData);
    }
  };
  return (
    <>
      <div class="flex items-center justify-center py-[10%] w-[100vw] overflow-x-hidden h-[100%]  ">
        <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div class="flex flex-col sm:flex-col-reverse  md:flex-row">
            <div class="flex items-center  justify-center p-6 sm:p-12 md:w-1/2">
              <div class="w-full">
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-20 h-20 text-brightYellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                  Register with Email
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label class="block text-sm">Name</label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 text-sm border rounded-md focus:border-brightYellow focus:outline-none focus:ring-1 focus:ring-brightYellow"
                      placeholder="Name"
                      {...register("full_name")}
                    />
                  </div>
                  <div className="mt-4">
                    <label class="block text-sm">User Name</label>
                    <input
                      type="text"
                      class="w-full px-4 py-2 text-sm border rounded-md focus:border-brightYellow focus:outline-none focus:ring-1 focus:ring-brightYellow"
                      placeholder="User Name"
                      {...register("username")}
                    />
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm">Email</label>
                    <input
                      type="email"
                      class="w-full px-4 py-2 text-sm border rounded-md focus:border-brightYellow focus:outline-none focus:ring-1 focus:ring-brightYellow"
                      placeholder="Email Address"
                      required
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <label class="block mt-4 text-sm">Password</label>
                    <input
                      class="w-full px-4 py-2 text-sm border rounded-md focus:border-brightYellow focus:outline-none focus:ring-1 focus:ring-brightYellow"
                      placeholder="Password"
                      name="password"
                      type="password"
                      {...register("password")}
                    />
                    <div className="mt-4 ">
                      <p className="text-xs">
                        {/* Please enter only numerics and numbers{" "} */}
                        <a href="#" className="text-brightYellow">
                          {" "}
                          {`Pick something you like. Password can't be changed later`}
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="alerts text-[#C04955]">
                    {errors.password?.message}
                  </p>
                  <div>
                    <label className="block mt-4 text-sm">
                      Confirm Password
                    </label>
                    <input
                      class="w-full px-4 py-2 text-sm border rounded-md focus:border-brightYellow focus:outline-none focus:ring-1 focus:ring-brightYellow"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      type="password"
                      {...register("confirm_password")}
                    />
                  </div>
                  <p className="alerts text-[#C04955]">
                    {errors.confirm_password?.message}
                  </p>
                  <button
                    class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-darkBrown border border-transparent rounded-lg active:bg-brightYellow hover:bg-brightYellow focus:outline-none focus:shadow-outline-blue"
                    href="#"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
            <div class="h-32 md:h-auto flex items-center justify-center md:w-1/2">
              <Image
                src={"/GRITO LOGO 1.png"}
                class="object-cover "
                width={300}
                height={300}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
