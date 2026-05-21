import Image from "next/image";
import Link from "next/link";

import { fetchPets } from "@/lib/pets/data";
import PetsCard from "@/components/PetsCard";
import PetsHeader from "@/components/PetsHeader";

const PetsPage = async ({ searchParams }) => {
      const sParams = await searchParams;
  const pets = await fetchPets(sParams?.searchTerm || ""
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <PetsHeader></PetsHeader>
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900">
            All Pets
          </h1>

          <p className="mt-3 text-slate-600">
            Find your perfect furry friend for adoption
          </p>
        </div>

      
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pets?.map((pet) => (
           <PetsCard key={pet._id} pet={pet}></PetsCard>
          ))}
        </div>

       
        {pets?.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-700">
              No Pets Found
            </h2>

            <p className="mt-2 text-slate-500">
              Please add some pets for adoption.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetsPage;