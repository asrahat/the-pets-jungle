"use client";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("searchTerm") || ""
  );

  
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) {
      params.set("searchTerm", search);
    }

   

    router.push(`/pets?${params.toString()}`);
  };

  return (
    <div className="flex gap-3">

      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="shadow-2xl border border-zinc-200 p-3 rounded-xl w-full"
      />

      <button
        onClick={handleSearch}
        className="bg-green-600 text-white px-6 rounded-xl"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;