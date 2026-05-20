import Image from "next/image";
import { Button } from "@heroui/react";

const MyListingPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addpet`);

  const addPets = await res.json();
  console.log(addPets.imageURL,'addpets');

  const totalListings = addPets?.length || 0;

  const available = addPets?.length || 0;
  const adopted = 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Listings</h1>
        <p className="text-gray-500 mt-2">
          Manage your listed pets for adoption
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <p className="text-gray-500">Total Listings</p>
          <h2 className="text-2xl font-bold">{totalListings}</h2>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <p className="text-gray-500">Available</p>
          <h2 className="text-2xl font-bold text-green-600">{available}</h2>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <p className="text-gray-500">Adopted</p>
          <h2 className="text-2xl font-bold text-red-500">{adopted}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {addPets?.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-72 ">
             <Image
                       src={pet?.imageURL || 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&…'}
                       alt={pet.petName}
                       fill
                       sizes="300"
                       className="object-cover transition duration-700 group-hover:scale-110"
                     />

              <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
                {pet.species}
              </span>

              <span className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                {pet.location}
              </span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold">{pet.petName}</h2>
                  <p className="text-sm text-gray-500">{pet.breed}</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">Adoption Fee</p>
                  <p className="text-green-600 font-bold">${pet.adoptionFee}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-gray-100 rounded-xl p-2 text-center">
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="font-semibold">{pet.age} Years</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-2 text-center">
                  <p className="text-xs text-gray-500">Gender</p>
                  <p className="font-semibold">{pet.gender}</p>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-4 mt-4">
                <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                  Requests
                </Button>

                <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                  View
                </Button>

                <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                  Edit
                </Button>

                <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingPage;
