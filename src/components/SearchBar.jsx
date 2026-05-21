"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }

    router.push(`/pets?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="pl-5 text-slate-400">
        <Search className="h-5 w-5" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search pets..."
        className="h-14 flex-1 bg-transparent px-4 outline-none"
      />

      <button
        onClick={handleSearch}
        className="mr-2 h-10 rounded-xl bg-green-600 px-6 font-semibold text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;