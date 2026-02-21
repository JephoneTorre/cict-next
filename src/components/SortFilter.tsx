"use client";

interface SortFilterProps {
	value: string;
	onChange: (value: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ value, onChange }) => {
	const options = [
		{ value: "", label: "Sort / Filter" },
		{ value: "name-asc", label: "Name A → Z" },
		{ value: "name-desc", label: "Name Z → A" },
		{ value: "date-new", label: "Newest" },
		{ value: "date-old", label: "Oldest" },
	];

	return (
		<select
		value={value}
		onChange={(e) => onChange(e.target.value)}
		className="flex-1 text-xs sm:text-sm font-minor italic text-[#000000]/40 h-10 px-3 py-2 shadow-lg bg-white border-2 border-[#000000]/6 rounded-lg focus:outline-none cursor-pointer"
		>
			{options.map((opt) => (
				<option
				key={opt.value}
				value={opt.value}
				disabled={opt.value === ""}
				>
				{opt.label}
				</option>
			))}
		</select>
	);
};

export default SortFilter;
