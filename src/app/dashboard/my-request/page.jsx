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
    `${process.env.NEXT_PUBLIC_API_URL}/adopting/${user?.id}`
  );

  const adoptingsData = await res.json();

  const adoptings = adoptingsData.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.petId === item.petId)
  );

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-50 p-4 md:p-8">
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
          <div className="rounded-[24px] bg-slate-900 p-8 text-center text-white">
            <h2 className="text-4xl font-black">{adoptings.length}</h2>
            <p className="text-sm text-slate-400">Total</p>
          </div>

          <div className="rounded-[24px] bg-slate-900 p-8 text-center">
            <h2 className="text-4xl font-black text-yellow-400">
              {adoptings.filter((i) => i.status === "pending").length}
            </h2>
            <p className="text-sm text-slate-400">Pending</p>
          </div>

          <div className="rounded-[24px] bg-slate-900 p-8 text-center">
            <h2 className="text-4xl font-black text-green-400">
              {adoptings.filter((i) => i.status === "approved").length}
            </h2>
            <p className="text-sm text-slate-400">Approved</p>
          </div>

          <div className="rounded-[24px] bg-slate-900 p-8 text-center">
            <h2 className="text-4xl font-black text-red-500">
              {adoptings.filter((i) => i.status === "rejected").length}
            </h2>
            <p className="text-sm text-slate-400">Rejected</p>
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
          <div className="w-full overflow-x-auto rounded-[30px] bg-white/70 shadow-2xl backdrop-blur-xl">
            <table className="w-full min-w-[900px]">
              <thead className="bg-linear-to-r from-green-600 to-emerald-500 text-white">
                <tr>
                  <th className="px-8 py-5 text-left">Pet Name</th>
                  <th className="px-8 py-5 text-left">Request Date</th>
                  <th className="px-8 py-5 text-left">Pickup Date</th>
                  <th className="px-8 py-5 text-left">Status</th>
                  <th className="px-8 py-5 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {adoptings.map((adopting) => (
                  <tr
                    key={adopting._id}
                    className="border-b hover:bg-green-50/60 transition"
                  >
                    <td className="px-8 py-6 font-bold">
                      {adopting.petName}
                    </td>

                    <td className="px-8 py-6">
                      {new Date(adopting.requestDate).toLocaleDateString()}
                    </td>

                    <td className="px-8 py-6">
                      {adopting.pickupDate}
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-bold ${
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
                      <div className="flex justify-center gap-3">
                        <Link href={`/pets/${adopting.petId}`}>
                          <Button
                            size="sm"
                            className="bg-green-600 text-white"
                          >
                            View
                          </Button>
                        </Link>

                        <AdoptingCancleAlert
                          adoptingId={adopting._id}
                        />
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