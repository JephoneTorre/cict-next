// [IMPORT] Standard
import Image from "next/image";

const SearchBar = () => {
    return (
        <div className="flex flex-3 sm:flex-3 justify-between w-full rounded-lg focus:outline-none shadow-xl border-2 border-orange-dark"
            >
            <input className="px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-minor italic h-full focus:outline-none"
            placeholder="Search by name..."/>
            <button className="bg-orange-dark px-2 rounded-r-sm cursor-pointer">
                <Image src="search-icon.svg" alt="search-icon" className="min-w-4" width={20} height={20}/>
            </button>
        </div>
    );
};

export default SearchBar;