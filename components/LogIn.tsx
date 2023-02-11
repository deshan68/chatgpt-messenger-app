"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import gpt_logo from "../components/assets/gpt_logo.png";

function LogIn() {
  return (
    <div
      className="bg-[#11A37f] h-screen flex flex-col items-center justify-center text-center space-y-3
    "
    >
      <Image src={gpt_logo} width={100} height={100} alt={"logo"} />
      <button
        onClick={() => signIn("google")}
        className="text-3xl font-bold animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default LogIn;
