import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const PetsCard = ({pet}) => {
    return (
         <div
              key={pet._id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
   {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pet.imageURL}
                  alt={pet.petName}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

  
              <div className="space-y-3 p-5">

            
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {pet.petName}
                  </h2>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {pet.species}
                  </span>
                </div>

           
                <div className="space-y-1 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">
                      Breed:
                    </span>{" "}
                    {pet.breed}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Age:
                    </span>{" "}
                    {pet.age} years
                  </p>

                  <p>
                    <span className="font-semibold">
                      Gender:
                    </span>{" "}
                    {pet.gender}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Location:
                    </span>{" "}
                    {pet.location}
                  </p>
                </div>

                <p className="line-clamp-2 text-sm text-slate-500">
                  {pet.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-green-600">
                    ${pet.adoptionFee}
                  </span>

                  <Link href={`/pets/${pet._id}`}>
                    <button className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default PetsCard;