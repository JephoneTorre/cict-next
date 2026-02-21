"use client";

import Image from "next/image";

const SearchBar = () => {
  return (
<div className="flex flex-2 sm:flex-[2] justify-between items-stretch rounded-lg shadow-xl border-2 border-orange-dark overflow-hidden h-10">
      <input
        type="text"
        placeholder="Search by name..."
        className="flex-1 px-3 text-xs sm:text-sm font-minor italic focus:outline-none"
      />
      <button className="hidden sm:flex items-center justify-center px-2 md:px-3 bg-orange-dark cursor-pointer">
        <Image src="search-icon.svg" alt="search-icon" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchBar;