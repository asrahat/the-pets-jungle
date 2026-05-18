"use client";
import React from 'react';

import Link from "next/link";

import { motion } from "framer-motion";

import { Button, Input } from "@heroui/react";

import {  FaLock, FaGoogle, FaPaw } from "react-icons/fa";

const RegisterPage = () => {
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


        <form className="mt-8 space-y-5">

          <div className="group">
            <Input
              type="text"
              placeholder="Your Name"
              className={"w-full rounded-lg"}
            />
          </div>
          <div className="group">
            <Input
              type="email"
              placeholder="Email address"
              className={"w-full rounded-lg"}
            />
          </div>
          <div className="group">
            <Input
              type="url"
              placeholder="Photo URL"
              className={"w-full rounded-lg"}
            />
          </div>

          <div className="group">
            <Input
              type="password"
              placeholder="Password"
              startContent={<FaLock className="text-slate-400" />}
              className={"w-full rounded-lg"}
            />
          </div>
          <div className="group">
            <Input
              type="password"
              placeholder="Confirm Password"
              startContent={<FaLock className="text-slate-400" />}
              className={"w-full rounded-lg"}
            />
          </div>

          <Button
            size="lg"
            radius="full"
            className="h-14 w-full bg-linear-to-r from-green-600 to-emerald-500 text-base font-bold text-white shadow-xl transition hover:scale-[1.02]"
          >
            Register
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-500">OR CONTINUE WITH</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Button
          size="lg"
          radius="full"
          variant="bordered"
          className="h-14 w-full border border-slate-200 bg-white text-base font-semibold shadow-md transition hover:bg-slate-50"
        >
          <FaGoogle className="text-red-500" />
          Google Login
        </Button>

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