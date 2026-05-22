"use client";

import { Button, Input } from "@heroui/react";
import { motion } from "framer-motion";

import {
  FaPaw,
  FaEnvelopeOpenText,
  FaDog,
  FaCat,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="relative overflow-hidden py-28">
  
      <div className="absolute inset-0 bg-linear-to-br from-green-600 via-emerald-600 to-lime-500" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />

  
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-10 top-16 hidden rounded-full bg-white/10 p-5 backdrop-blur-lg lg:block"
      >
        <FaDog className="text-5xl text-white/80" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-16 right-10 hidden rounded-full bg-white/10 p-5 backdrop-blur-lg lg:block"
      >
        <FaCat className="text-5xl text-white/80" />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl lg:p-16"
        >
  
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <FaEnvelopeOpenText className="text-5xl text-white" />
          </div>

  
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-lg">
              <FaPaw />
              Join Our Pet Community
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Stay Updated With
              <span className="block text-yellow-200">
                Cute Pets & Adoption News
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50">
              Subscribe to receive pet adoption stories,
              rescue updates, pet care tips, and notifications
              about newly available furry friends.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex  flex-col items-center justify-between gap-4 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                size="lg"
                radius="full"
                classNames={{
                  inputWrapper:
                    "bg-white border-0  shadow-none h-14",
                  input: "text-slate-700 ",
                }}
              />

              <Button
                size="lg"
                radius="full"
                className="h-14 bg-slate-900 px-10 font-bold text-white transition hover:scale-105"
              >
                Subscribe Now
              </Button>
            </div>

      
            <p className="mt-5 text-center text-sm text-green-100">
              🐾 No spam. Only adorable pet updates and useful
              tips.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg">
              <h3 className="text-4xl font-extrabold text-white">
                5K+
              </h3>

              <p className="mt-2 text-green-100">
                Happy Subscribers
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg">
              <h3 className="text-4xl font-extrabold text-white">
                1K+
              </h3>

              <p className="mt-2 text-green-100">
                Pets Adopted
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg">
              <h3 className="text-4xl font-extrabold text-white">
                24/7
              </h3>

              <p className="mt-2 text-green-100">
                Rescue Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;