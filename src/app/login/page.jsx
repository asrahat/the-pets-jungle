"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button, Input } from "@heroui/react";

import { FaLock, FaGoogle, FaPaw } from "react-icons/fa";

import { signInEmail } from "better-auth/api";

import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const loginData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      ...loginData,
      callbackURL: "/",
    });

    const { data:tokenData} = await authClient.token()
    console.log(tokenData,'tokenData');

    if (error) {
      toast.error("Login failed. Please check your credentials.");
      return;
    }

    toast.success("Login successful!");
    
    router.push("/"); // redirect home
    window.location.reload()
  };


  const handleGoogleLogin = async()=>{
    const data = await authClient.signIn.social({
      provider:'google'
    })
  }
 

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100 px-4">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-[30px] border border-white/30 bg-white/40 p-10 shadow-2xl backdrop-blur-2xl"
      >

        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 shadow-lg">
            <FaPaw className="text-3xl text-white" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-black text-slate-900">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-sm text-slate-600">
          Login to continue your pet adoption journey
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <Input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-lg"
            required
          />

          <Button
            type="submit"
            size="lg"
            radius="full"
            className="h-14 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-base font-bold text-white shadow-xl transition hover:scale-[1.02]"
          >
            Login
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">OR CONTINUE WITH</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Button
          onClick={handleGoogleLogin}
          size="lg"
          radius="full"
          variant="bordered"
          className="h-14 w-full border border-slate-200 bg-white text-base font-semibold shadow-md transition hover:bg-slate-50"
        >
          <FaGoogle className="text-red-500" />
          Google Login
        </Button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-green-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;