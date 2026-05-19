import { fetchFeaturedPets } from "@/lib/pets/data";
import React from "react";
import PetsCard from "./PetsCard";

const FeaturedPets = async () => {
  const featuredPets = await fetchFeaturedPets();

  return (
    <section className="relative overflow-hidden py-20">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900">
            Featured Pets 🐾
          </h2>

          <p className="mt-3 text-slate-600">
            Meet some of our most loved pets waiting for a home
          </p>
        </div>

        <div className="rounded-[40px] border border-slate-200 bg-white/60 p-6 shadow-xl backdrop-blur-xl sm:p-10">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredPets?.map((pet) => (
              <PetsCard key={pet._id} pet={pet} />
            ))}
          </div>

          {featuredPets?.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-700">
                No Featured Pets Found
              </h3>
              <p className="mt-2 text-slate-500">
                Please add pets to showcase here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;