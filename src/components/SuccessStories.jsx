"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Sarah & Bella",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    story:
      "Bella was rescued from the streets and now enjoys a loving home full of care and happiness.",
  },
  {
    name: "David & Max",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
    story:
      "Max transformed David’s life with companionship and endless joyful moments.",
  },
  {
    name: "Emma & Luna",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    story:
      "Luna found her forever family and now spends every day surrounded by love.",
  },
];

const SuccessStories = () => {
    return (
            <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
   
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Happy Families
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Success Stories
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Real stories of pets finding loving homes and
            changing lives forever.
          </p>
        </div>

   
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm transition hover:shadow-2xl"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {story.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {story.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default SuccessStories;