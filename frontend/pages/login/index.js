import Errmsg from "@/core/Errmsg";
import useLogin from "@/libs/Murations/admin/useLogin";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineLogin } from "react-icons/md";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginFunc, isPending } = useLogin();

  const onSubmit = (formdata) => {
    loginFunc(formdata);
  };
  return (
    <>
      {/*  */}
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>{/* <Image src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png" className="w-32 mx-auto" /> */}</div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login up</h1>
              <div className="w-full flex-1">
                <div className="my-6 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">Enter Your Login Credentials</div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xs">
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <Errmsg name="email" err={errors} />
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password should contain 8 characters",
                      },
                    })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <Errmsg name="password" err={errors} />
                  <button disabled={isPending} className={`mt-5 ${isPending === true && "bg-indigo-300 cursor-wait"} tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}>
                    <MdOutlineLogin />
                    <span className="ml-3">Login</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
