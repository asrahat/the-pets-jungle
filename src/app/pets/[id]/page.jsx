import AdoptSection from "@/components/AdoptSection";
import Image from "next/image";

export const fetchPet = async(id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`
  );

  if (!res.ok) throw new Error("Failed to fetch pet");

  return res.json();
};

const PetDetailsPage = async ( {params}) => {
    const {id} = await params

  const pet = await fetchPet(id);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={pet.imageURL}
              alt={pet.petName}
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md space-y-3">
            <h1 className="text-4xl font-black">
              {pet.petName}
            </h1>

            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
            <p>Gender: {pet.gender}</p>
            <p>Location: {pet.location}</p>

            <p className="text-xl font-bold text-green-600">
              ${pet.adoptionFee}
            </p>
          </div>
        </div>

        {/* RIGHT (CLIENT FORM) */}
        <AdoptSection pet={pet} />
      </div>
    </div>
  );
};

export default PetDetailsPage;