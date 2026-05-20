"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button, Input } from "@heroui/react";

import {
  FaLock,
  FaGoogle,
  FaPaw,
  FaUser,
  FaEnvelope,
  FaImage,
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

    const password = registerData.password ;

    const confirmPassword =
      registerData.confirmPassword;


    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter"
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error(
        "Password must contain at least one lowercase letter"
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data, error } =
        await authClient.signUp.email({
          name: registerData.name,
          email: registerData.email,
          password,
          image: registerData.image,
          callbackURL: "/login",
        });

      
      if (error) {
        toast.error(
          error.message || "Registration failed"
        );
        return;
      }

 
      toast.success(
        "Registration successful!"
      );

      router.push("/login");
    } catch (err) {
      console.log(err);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">

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
          Create Account
        </h2>

        <p className="mt-2 text-center text-sm text-slate-600">
          Join The Pets Jungle and start your adoption
          journey today
        </p>

      
        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

    
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            startContent={
              <FaUser className="text-slate-400" />
            }
            className="w-full"
            required
          />

 
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            startContent={
              <FaEnvelope className="text-slate-400" />
            }
            className="w-full"
            required
          />

   
          <Input
            name="image"
            type="url"
            placeholder="Photo URL"
            startContent={
              <FaImage className="text-slate-400" />
            }
            className="w-full"
          />

     
          <Input
            name="password"
            type="password"
            placeholder="Password"
            startContent={
              <FaLock className="text-slate-400" />
            }
            description="Minimum 6 characters, one uppercase & one lowercase"
            className="w-full"
            required
          />

  
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            startContent={
              <FaLock className="text-slate-400" />
            }
            className="w-full"
            required
          />

         
          <Button
            type="submit"
            size="lg"
            radius="full"
            className="h-14 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-base font-bold text-white shadow-xl transition hover:scale-[1.02]"
          >
            Register
          </Button>
        </form>

   
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-xs text-slate-500">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>


        

   
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