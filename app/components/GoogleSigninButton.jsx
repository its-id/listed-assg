"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

import googleIcon from "../../public/google.svg";

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.has("callbackUrl") ? searchParams.get("callbackUrl") : "/dashboard";

  return (
    <button
      className="w-full flex justify-center gap-2 items-center border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <Image src={googleIcon} alt="Google Icon" />
      <span className="text-xs md:text-sm">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
