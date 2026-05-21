import AdoptSection from "@/components/AdoptSection";
import { auth } from "@/lib/auth";
import { fetchPet } from "@/lib/pets/data";
import { headers } from "next/headers";
import Image from "next/image";



const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  
  // const tokenData = await auth.api.getToken({
  //   headers: await headers(),
  // });

  // const token = tokenData?.token;

  // console.log(token, "TOKEN");

  const pet = await fetchPet(id);//token

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">

        {/* LEFT */}
        <div className="space-y-6 lg:col-span-2">

          <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={pet.imageURL}
              alt={pet.petName}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3 rounded-3xl bg-white p-6 shadow-md">
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

        {/* RIGHT */}
        <AdoptSection pet={pet} />

      </div>
    </div>
  );
};

export default PetDetailsPage;