"use client";

import {
  FaBone,
  FaHeartbeat,
  FaBath,
  FaWalking,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaBone />,
    title: "Healthy Nutrition",
    description:
      "Provide balanced meals and fresh water daily for your pet’s health.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Regular Vet Visits",
    description:
      "Routine checkups help detect and prevent health problems early.",
  },
  {
    icon: <FaBath />,
    title: "Proper Grooming",
    description:
      "Keep pets clean and comfortable with regular grooming sessions.",
  },
  {
    icon: <FaWalking />,
    title: "Daily Exercise",
    description:
      "Exercise keeps pets active, healthy, and mentally stimulated.",
  },
];
const PetsCare = () => {
    return (
      <div className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Pet Wellness
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Pet Care Tips
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn how to keep your furry companions healthy,
            active, and happy every day.
          </p>
        </div>

        {/* TIPS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600">
                {tip.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {tip.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default PetsCare;