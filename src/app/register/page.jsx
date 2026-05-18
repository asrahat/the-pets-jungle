"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button, Input } from "@heroui/react";

import {
  FaLock,
  FaGoogle,
  FaPaw,
} from "react-icons/fa";

import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (
    e
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const registerData = Object.fromEntries(
      formData.entries()
    );

    // PASSWORD MATCH CHECK
    if (
      registerData.password !==
      registerData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data, error } =
        await authClient.signUp.email({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password ,
          image: registerData.image,
          callbackURL: "/",
        });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      toast.success("Registration successful!");

      router.push("/");
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100 px-4">

      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-[30px] border border-white/30 bg-white/40 p-10 shadow-2xl backdrop-blur-2xl"
      >

        {/* ICON */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 shadow-lg">
            <FaPaw className="text-3xl text-white" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-center text-3xl font-black text-slate-900">
          Create Account
        </h2>

        <p className="mt-2 text-center text-sm text-slate-600">
          Join The Pets Jungle and start your adoption
          journey today
        </p>

        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          {/* NAME */}
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg"
            required
          />

          {/* EMAIL */}
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg"
            required
          />

          {/* IMAGE */}
          <Input
            name="image"
            type="url"
            placeholder="Photo URL"
            className="w-full rounded-lg"
          />

          {/* PASSWORD */}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            startContent={
              <FaLock className="text-slate-400" />
            }
            className="w-full rounded-lg"
            required
          />

          {/* CONFIRM PASSWORD */}
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            startContent={
              <FaLock className="text-slate-400" />
            }
            className="w-full rounded-lg"
            required
          />

          {/* BUTTON */}
          <Button
            type="submit"
            size="lg"
            radius="full"
            className="h-14 w-full bg-linear-to-r from-green-600 to-emerald-500 text-base font-bold text-white shadow-xl transition hover:scale-[1.02]"
          >
            Register
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-xs text-slate-500">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* GOOGLE BUTTON */}
        <Button
          size="lg"
          radius="full"
          variant="bordered"
          className="h-14 w-full border border-slate-200 bg-white text-base font-semibold shadow-md transition hover:bg-slate-50"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </Button>

        {/* LOGIN */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-green-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;