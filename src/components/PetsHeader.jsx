import SearchBar from "./SearchBar";

const PetsHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 py-24">

      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* BADGE */}
        <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-white/70 px-5 py-2 text-sm font-semibold text-green-700 shadow-sm backdrop-blur-xl">
          🐾 Find Your Perfect Companion
        </div>

        {/* TITLE */}
        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">

          Discover Loving{" "}
          
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Pets
          </span>

          <br />

          Ready for Adoption
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          Browse adorable cats, dogs, and more waiting for a forever home.
          Start your adoption journey today and give a pet the love they deserve.
        </p>

        {/* SEARCH */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-[28px] border border-white/30 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
            <SearchBar />
          </div>
        </div>

        {/* STATS */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

          <div className="rounded-2xl border border-white/20 bg-white/70 px-8 py-5 shadow-xl backdrop-blur-xl">
            <h2 className="text-3xl font-black text-green-600">
              500+
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Pets Available
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/70 px-8 py-5 shadow-xl backdrop-blur-xl">
            <h2 className="text-3xl font-black text-emerald-600">
              1K+
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Happy Adoptions
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/70 px-8 py-5 shadow-xl backdrop-blur-xl">
            <h2 className="text-3xl font-black text-lime-600">
              24/7
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Adoption Support
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default PetsHeader;