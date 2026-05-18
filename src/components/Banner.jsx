"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@heroui/button";
const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7"
        >
          <div className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            🐾 Find Your Perfect Companion
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Welcome To{" "}
            <span className="text-green-600">The Pets Jungle</span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-gray-600">
            Discover loving pets waiting for a forever home. Adopt adorable
            cats, dogs, and more while giving them the care and family they
            deserve.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              as={Link}
              href="/pets"
              color="success"
              size="lg"
              radius="full"
              className="px-8 font-semibold shadow-lg"
            >
              Adopt Now
            </Button>

            <Button
              as={Link}
              href="/add-pet"
              variant="bordered"
              size="lg"
              radius="full"
              className="border-green-600 px-8 font-semibold text-green-700"
            >
              Add Pet
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-6">
            <div>
              <h3 className="text-3xl font-bold text-green-600">500+</h3>
              <p className="text-gray-600">Pets Adopted</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">300+</h3>
              <p className="text-gray-600">Happy Families</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">100%</h3>
              <p className="text-gray-600">Pet Care Support</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Main Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-green-400/20 blur-2xl" />

            <Image
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
              alt="Pet Banner"
              width={600}
              height={600}
              className="relative z-10 rounded-[40px] object-cover shadow-2xl"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute bottom-6 left-0 rounded-2xl bg-white p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-3 text-2xl">
                🐶
              </div>

              <div>
                <h4 className="font-bold text-gray-800">
                  New Pets Available
                </h4>
                <p className="text-sm text-gray-500">
                  Start your adoption journey today
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    );
};

export default Banner;