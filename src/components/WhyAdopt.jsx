"use client";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaHome,
  FaSmile,
  FaPaw,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaHeart />,
    title: "Save a Life",
    description:
      "Give abandoned pets a second chance and a loving forever home.",
  },
  {
    icon: <FaHome />,
    title: "Find a Companion",
    description:
      "Pets bring happiness, loyalty, and emotional support to families.",
  },
  {
    icon: <FaSmile />,
    title: "Reduce Stress",
    description:
      "Spending time with pets helps improve mood and mental well-being.",
  },
  {
    icon: <FaPaw />,
    title: "Support Animal Welfare",
    description:
      "Adopting helps reduce overcrowding in shelters and rescues.",
  },
];

const WhyAdopt = () => {
    return (
       <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Why Choose Adoption
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Why Adopt Pets?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every pet deserves a loving family. Adoption
            creates beautiful bonds while giving animals a
            safe and happy future.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default WhyAdopt;