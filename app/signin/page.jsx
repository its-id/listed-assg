"use client";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";

import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";

import appleIcon from "../../public/apple.svg";
import googleIcon from "../../public/google.svg";

const SignInPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  //only come to this page if user if unauthenticated
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      return;
    },
  }); //client side

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.has("callbackUrl") ? searchParams.get("callbackUrl") : "/dashboard";

  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);

  const handleSubmit = async () => {
    const toastId = toast.loading("Signing in...");
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl,
    });

    if (res) {
      if (res.status === 200) {
        toast.success("Logged in successfully!", {
          id: toastId,
        });
      } else if (res.status === 401) {
        toast.error("Invalid credentials!", {
          id: toastId,
        });
      }
    }
  };

  return (
    <div className="min-h-full flex">
      <div className="hidden md:flex justify-center items-center w-[40%] h-100vh bg-black">
        <p className="montserrat tracking-wide text-5xl font-bold text-white inline-block">Board.</p>
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-[#F5F5F5]">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Sign in</h2>
            <p className="mt-2 font-medium text-gray-800">Sign in to your account</p>
          </div>

          <div className="mt-8">
            <div className="mt-1 grid grid-cols-2 gap-3">
              <button
                className="w-full flex justify-center gap-2 items-center border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => signIn("google", { callbackUrl })}
              >
                <Image src={googleIcon} alt="Google Icon" />
                <span className="text-xs md:text-sm">Sign in with Google</span>
              </button>
              <button className="w-full gap-2 items-center flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Image src={appleIcon} alt="Sign in with Apple" />
                <span className="text-xs md:text-sm">Sign in with Apple</span>
              </button>
            </div>

            <div className="mt-6 px-5 py-8 bg-white rounded-xl">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={userInfo.email}
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={userInfo.password}
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </form>
            </div>
            <div className="mt-2 relative flex justify-center text-sm">
              <span className="px-2 text-gray-500">
                Don't have an account?{" "}
                <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                  Register here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInPage;
