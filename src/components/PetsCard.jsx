"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { MapPin, PawPrint } from "lucide-react";

import { toast } from "sonner";

import { useSession } from "@/lib/auth-client";

const PetsCard = ({ pet }) => {
  const router = useRouter();

  const { data: session } = useSession();

  const handleAdopt = () => {
    if (!session) {
      toast.error(
        "Please login first to adopt a pet"
      );

      router.push("/login");

      return;
    }

    router.push(`/pets/${pet._id}`);
  };

  return (
    <div className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={pet.imageURL}
          alt={pet.petName}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">
          {pet.species}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-sm text-white backdrop-blur-md">
          <MapPin size={15} />
          {pet.location}
        </div>
      </div>

      <div className="space-y-5 p-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              {pet.petName}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {pet.breed}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Adoption Fee
            </p>

            <h2 className="text-2xl font-black text-green-600">
              ${pet.adoptionFee}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs font-medium text-slate-500">
              Age
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {pet.age} Years
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs font-medium text-slate-500">
              Gender
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {pet.gender}
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-5">

          


          <div className="flex items-center justify-between gap-6">

            <Link href={`/pets/${pet._id}`}>
              <button className="rounded-full border cursor-pointer border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-600">
                Details
              </button>
            </Link>

            <button
              onClick={handleAdopt}
              className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              Adopt Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsCard;