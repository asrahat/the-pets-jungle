"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { toast } from "sonner";

const AdoptSection = ({ pet }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user,'user');

  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    petName,
    _id,
    imageURL,
    adoptionFee,
  } = pet;

  const handleAdopt = async () => {
    if (!session) {
      toast.error("Please login first");

      router.push("/login");

      return;
    }

    if (!pickupDate) {
      toast.error("Pickup date required");

      return;
    }

    const adoptionData = {
      petId: _id,
      petName,
      imageURL,

      adoptionFee,

      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,

      pickupDate: new Date(pickupDate),
      message,

      status: ["pending", 'Approve'],

      requestDate: new Date().toISOString(),
    };

    console.log(adoptionData, "adoptionData");

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adoptionData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data.message || "Failed to adopt pet"
        );

        setLoading(false);

        return;
      }

      toast.success("Adoption request sent!");

      router.push("/dashboard/my-request");
    } catch (err) {
      console.log(err);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-10 space-y-5 rounded-3xl border border-white/20 bg-white p-6 shadow-xl">
        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Adoption Form
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Fill the form to request adoption
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Pet Name
          </label>

          <input
            value={petName || ""}
            readOnly
            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            User Name
          </label>

          <input
            value={user?.name || ""}
            readOnly
            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            User Email
          </label>

          <input
            value={user?.email || ""}
            readOnly
            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Pickup Date
          </label>

          <input
            type="date"
            value={pickupDate}
            onChange={(e) =>
              setPickupDate(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Message
          </label>

          <textarea
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Why do you want to adopt this pet?"
            rows={4}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-green-500"
          />
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={handleAdopt}
          className="w-full rounded-xl bg-linear-to-r from-green-600 to-emerald-500 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending Request..." : "Adopt Now"}
        </button>

        <p className="text-center text-xs text-slate-500">
          Default Status:
          <span className="ml-1 font-semibold capitalize text-yellow-600">
            pending
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdoptSection;