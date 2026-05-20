import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Link from "next/link";

import { Button } from "@heroui/react";
import AdoptingCancleAlert from "@/components/AdoptingCancleAlert";

const MyRequestPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/adopting/${user?.id}`,
  );

  const adoptings = await res.json();
  console.log(adoptings);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
            🐾 My Requests
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            My{" "}
            <span className="bg-linear-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
              Adoption Requests
            </span>
          </h1>

          <p className="mt-2 text-slate-500">
            Track the status of all your adoption requests here.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] border border-white/20 bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h2 className="text-center text-4xl font-black text-white">
              {adoptings.length}
            </h2>

            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Total
            </p>
          </div>

          <div className="rounded-[24px] border border-white/20 bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h2 className="text-center text-4xl font-black text-yellow-400">
              {adoptings.filter((item) => item.status === "pending").length}
            </h2>

            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Pending
            </p>
          </div>

          <div className="rounded-[24px] border border-white/20 bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h2 className="text-center text-4xl font-black text-green-400">
              {adoptings.filter((item) => item.status === "approved").length}
            </h2>

            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Approved
            </p>
          </div>

          <div className="rounded-[24px] border border-white/20 bg-linear-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <h2 className="text-center text-4xl font-black text-red-500">
              {adoptings.filter((item) => item.status === "rejected").length}
            </h2>

            <p className="mt-2 text-center text-sm font-medium text-slate-400">
              Rejected
            </p>
          </div>
        </div>

        {adoptings.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-[30px] border border-dashed border-green-200 bg-white/70 shadow-xl backdrop-blur-xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">
                No Requests Found
              </h2>

              <p className="mt-2 text-slate-500">
                You haven&apos;t requested any pets yet.
              </p>

              <Link href="/pets">
                <Button
                  color="success"
                  radius="full"
                  className="mt-6 font-semibold text-white"
                >
                  Browse Pets
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto rounded-[30px] border border-white/20 bg-white/70 shadow-2xl backdrop-blur-xl">
            <table className="w-full min-w-[900px]">
              {/* HEAD */}
              <thead className="bg-linear-to-r from-green-600 to-emerald-500 text-white">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wide">
                    Pet Name
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wide">
                    Request Date
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wide">
                    Pickup Date
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wide">
                    Status
                  </th>

                  <th className="px-8 py-5 text-center text-sm font-bold uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {adoptings.map((adopting, index) => (
                  <tr
                    key={adopting._id}
                    className={`transition hover:bg-green-50/70 ${
                      index !== adoptings.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <td className="px-8 py-6">
                      <h2 className="text-base font-bold text-slate-800">
                        {adopting.petName}
                      </h2>
                    </td>

                    <td className="px-8 py-6 text-sm font-medium text-slate-600">
                      {new Date(adopting.requestDate).toLocaleDateString()}
                    </td>

                    <td className="px-8 py-6 text-sm font-medium text-slate-600">
                      {adopting.pickupDate}
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-bold capitalize ${
                          adopting.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : adopting.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {adopting.status}
                      </span>
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-center justify-center gap-3">
                        <Link href={`/pets/${adopting.petId}`}>
                          <Button
                            size="sm"
                            radius="full"
                            className="bg-green-600 px-5 font-semibold text-white shadow-md"
                          >
                            View
                          </Button>
                        </Link>

                        <AdoptingCancleAlert></AdoptingCancleAlert>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequestPage;
