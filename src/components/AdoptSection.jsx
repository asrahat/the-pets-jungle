"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const AdoptSection = ({ pet }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const [requested, setRequested] = useState(false);

  const { petName, _id, imageURL, adoptionFee } = pet;

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

      status: ["pending",'Approved','Approved'],
      requestDate: new Date().toISOString(),
    };

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
        toast.error(data.message || "Failed to adopt pet");
        return;
      }

      toast.success("Adoption request sent!");
      
  
      setRequested(true);

      // optional redirect
      // router.push("/dashboard/my-request");

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-10 space-y-5 rounded-3xl  bg-white p-6 shadow-xl">

        <div>
          <h2 className="text-2xl font-black">
            Adoption Form
          </h2>
          <p className="text-sm text-gray-500">
            Fill the form to request adoption
          </p>
        </div>

        {requested ? (
          <div className="text-center space-y-4 py-10">
            
            <div className="mx-auto w-fit bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
              Pending Approval
            </div>

            <h3 className="text-lg font-bold text-gray-800">
              Request Sent Successfully 🎉
            </h3>

            <p className="text-sm text-gray-500">
              You will be notified after admin review
            </p>

            <button
              onClick={() => router.push("/dashboard/my-request")}
              className="mt-3 px-5 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              View My Requests
            </button>
          </div>
        ) : (
          <>
            <div>
              <label className="text-sm font-semibold">Pet Name</label>
              <input
                value={petName || ""}
                readOnly
                className="w-full rounded-xl bg-gray-100 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">User Name</label>
              <input
                value={user?.name || ""}
                readOnly
                className="w-full rounded-xl bg-gray-100 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">User Email</label>
              <input
                value={user?.email || ""}
                readOnly
                className="w-full rounded-xl bg-gray-100 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-xl border px-4 py-3 focus:border-green-500"
              />
            </div>

            <button
              disabled={loading}
              onClick={handleAdopt}
              className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 font-bold text-white disabled:opacity-60"
            >
              {loading ? "Sending..." : "Adopt Now"}
            </button>

            <p className="text-xs text-center text-gray-500">
              Status: <span className="text-yellow-600 font-semibold">Pending</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdoptSection;