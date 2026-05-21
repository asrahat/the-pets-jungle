import Link from "next/link";
import {
  LayoutDashboard,
  PawPrint,
  HeartHandshake,
  Menu,
} from "lucide-react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

      <div className="drawer lg:drawer-open">

        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content flex flex-col">

          <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/20 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden">

            <label
              htmlFor="dashboard-drawer"
              className="cursor-pointer rounded-xl bg-green-600 p-3 text-white shadow-lg"
            >
              <Menu className="h-5 w-5" />
            </label>

            <h2 className="text-lg font-black text-slate-800">
              Dashboard
            </h2>
          </div>

          <div className="w-full p-4 md:p-8">
            {children}
          </div>
        </div>
        <div className="drawer-side z-40">

          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay"
          ></label>

          <aside className="flex min-h-full w-80 flex-col border-r border-white/20 bg-slate-900 text-white shadow-2xl">

            <div className="border-b border-white/10 px-8 py-8">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                  <PawPrint className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h1 className="text-2xl font-black">
                    Pet Dashboard
                  </h1>

                  <p className="text-sm text-slate-400">
                    Manage your pets
                  </p>
                </div>
              </div>
            </div>

            <ul className="flex-1 space-y-3 p-6">

              <li>
                <Link
                  href="/dashboard"
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <LayoutDashboard className="h-5 w-5 text-green-400" />

                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-request"
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <HeartHandshake className="h-5 w-5 text-pink-400" />

                  My Requests
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/add-pet"
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <PawPrint className="h-5 w-5 text-emerald-400" />

                  Add Pet
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-listing"
                  className="group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <LayoutDashboard className="h-5 w-5 text-yellow-400" />

                  My Listings
                </Link>
              </li>
            </ul>

            <div className="border-t border-white/10 p-6">

              <div className="rounded-2xl bg-white/5 p-5 backdrop-blur-xl">

                <h2 className="text-lg font-bold">
                  Pet Adoption 🐾
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Give pets a loving home and manage your adoption journey easily.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default layout;