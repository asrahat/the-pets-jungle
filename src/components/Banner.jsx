"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@heroui/button";

import {
  FaPaw,
  FaHeart,
  FaDog,
  FaCat,
  FaArrowRight,
} from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100">
  
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200/20 blur-3xl" />

   
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-10 top-40 hidden rounded-full bg-white/70 p-5 shadow-xl backdrop-blur-xl lg:block"
      >
        <FaDog className="text-5xl text-green-600" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-32 right-10 hidden rounded-full bg-white/70 p-5 shadow-xl backdrop-blur-xl lg:block"
      >
        <FaCat className="text-5xl text-orange-500" />
      </motion.div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-20 px-6 py-16 lg:grid-cols-2 lg:px-10">
       
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
  
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-5 py-2 text-sm font-semibold text-green-700 shadow-md backdrop-blur-xl">
            <FaPaw />
            Find Your Forever Companion
          </div>

  
          <div>
            <h1 className="text-5xl font-black leading-tight text-slate-900 md:text-7xl">
              Welcome To
            </h1>

            <h1 className="mt-2 bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
              The Pets Jungle
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
            Discover adorable pets searching for loving homes.
            Adopt, rescue, and build unforgettable memories with
            your new furry best friend today.
          </p>

      
          <div className="flex flex-wrap gap-5">
            <Button
              as={Link}
              href="/pets"
              size="lg"
              radius="full"
              className="h-14 bg-green-600 px-8 text-base font-bold text-white shadow-2xl transition hover:scale-105"
            >
              Adopt Now
              <FaArrowRight />
            </Button>

            <Button
              as={Link}
              href="/add-pet"
              size="lg"
              radius="full"
              variant="bordered"
              className="h-14 border-2 border-green-600 px-8 text-base font-bold text-green-700 transition hover:bg-green-50"
            >
              Add Pet
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-5 pt-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-600">
                500+
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Pets Adopted
              </p>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-600">
                300+
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Happy Families
              </p>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-600">
                150+
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Rescue Volunteers
              </p>
            </div>

            <div className="rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-4xl font-black text-green-600">
                24/7
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Pet Support
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
         
          <div className="relative">
    
            <div className="absolute inset-0 rounded-[50px] bg-green-400/20 blur-3xl" />

     
            <div className="relative overflow-hidden rounded-[50px] border border-white/30 bg-white/20 shadow-2xl backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="Pet Banner"
                width={650}
                height={750}
                className="h-[650px] object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-10 top-10 hidden rounded-3xl border border-white/30 bg-white/80 p-5 shadow-2xl backdrop-blur-xl md:block"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-4">
                  <FaHeart className="text-2xl text-green-600" />
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    100% Adoption Care
                  </h4>

                  <p className="text-sm text-slate-500">
                    Trusted pet rescue platform
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -bottom-10 right-0 rounded-3xl border border-white/30 bg-white/80 p-5 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-orange-100 p-4">
                  🐶
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    New Pets Available
                  </h4>

                  <p className="text-sm text-slate-500">
                    Start your journey today
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;