"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Sarah Wilson",
    role: "Veterinarian",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Michael Johnson",
    role: "Pet Rescue Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Emma Brown",
    role: "Animal Care Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

const RescueTeam = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Our Dedicated Team
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Meet Our Rescue Heroes
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Passionate animal lovers working every day to rescue,
            protect, and find loving homes for pets in need.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
            
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

     
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <button className="rounded-full bg-white p-3 text-slate-700 transition hover:bg-green-600 hover:text-white">
                    <FaFacebookF />
                  </button>

                  <button className="rounded-full bg-white p-3 text-slate-700 transition hover:bg-green-600 hover:text-white">
                    <FaInstagram />
                  </button>

                  <button className="rounded-full bg-white p-3 text-slate-700 transition hover:bg-green-600 hover:text-white">
                    <FaTwitter />
                  </button>
                </div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-green-600">
                  {member.role}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Dedicated to improving the lives of pets and
                  helping them find caring families.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RescueTeam;