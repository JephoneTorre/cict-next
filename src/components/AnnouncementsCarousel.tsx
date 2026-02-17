"use client";

// [IMPORT] Standard
import Image from "next/image";
import Link from "next/link";

// [IMPORT] Hooks
import { useState, useEffect } from "react";

interface NewsArticle {
	id: number;
	imgSrc?: string;
	date: string;
	newsHeader: string;
}

interface AnnouncementsCarouselProps {
	articles: NewsArticle[];
}

export const AnnouncementsCarousel: React.FC<AnnouncementsCarouselProps> = ({ articles }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(240); // default = w-60
	const [windowWidth, setWindowWidth] = useState(0);

	const generateSlug = (text: string) =>
		text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

	// Detect responsive card width & window width
	useEffect(() => {
		const updateWidth = () => {
			const width = window.innerWidth;
			setWindowWidth(width);

			if (width >= 768) setCardWidth(288); // md:w-72
			else if (width >= 640) setCardWidth(264); // sm:w-66
			else setCardWidth(240); // w-60
		};
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	// Auto-slide carousel
	useEffect(() => {
		if (!articles.length) return;
		const interval = setInterval(() => {
			setActiveIndex(prev => (prev === articles.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, [articles.length]);

	const goToIndex = (index: number) => setActiveIndex(index);

	const goNext = () => {
		setActiveIndex(prev => (prev === articles.length - 1 ? 0 : prev + 1));
	};

	const goPrev = () => {
		setActiveIndex(prev => (prev === 0 ? articles.length - 1 : prev - 1));
	};

	const GAP = 40; // space-x-10
	const offset = activeIndex * (cardWidth + GAP) + cardWidth / 2;

	return (
		<>
			<div className="relative w-full overflow-hidden">
				{/* [BUTTON] Left Arrow */}
				<button
					onClick={goPrev}
					className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow- rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer"
					aria-label="Previous"
				>
					<Image src="/arrow-left-icon.svg" alt="left-arrow" width={16} height={24} />
				</button>

				{/* [BUTTON] Right Arrow */}
				<button
					onClick={goNext}
					className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer"
					aria-label="Next"
				>
					<Image src="/arrow-right-icon.svg" alt="right-arrow" width={16} height={24} />
				</button>
				<div
					className="flex transition-transform duration-500 ease-in-out space-x-10 py-4"
					style={{ transform: `translateX(calc(50% - ${offset}px))` }}
				>
					{articles.map((article, index) => {
						const daysAgo = Math.floor(
							(new Date().getTime() - new Date(article.date).getTime()) /
								(1000 * 60 * 60 * 24)
						);

						const isActive = index === activeIndex;

						return (
							<div
								key={article.id}
								className={`relative flex-none w-60 sm:w-66 md:w-72 transition-all duration-500 ${
									isActive ? "scale-105 sm:scale-110 z-10" : "scale-100 opacity-40"
								}`}
							>
								<div className="p-4 pb-5 sm:p-5 md:p-6 bg-white rounded-xl space-y-2 sm:space-y-4 md:space-y-5 overflow-hidden">
									<p className="text-end text-xs font-minor text-[#4D4D4D] mb-4">
										{daysAgo} days ago
									</p>

									{article.imgSrc ? (
										<Image
											src={article.imgSrc}
											alt={article.newsHeader}
											className="aspect-[16/9] rounded-xl object-cover"
											width={240}
											height={135}
										/>
									) : (
										<div className="aspect-[16/9] bg-gray-300 rounded-xl" />
									)}

									<h3
										className="text-xl sm:text-2xl text-black font-bold leading-6"
										style={{ minHeight: "4.5rem" }}
									>
										{article.newsHeader}
									</h3>

									<Link
										href={
											isActive
												? `/news-announcements/news/${generateSlug(article.newsHeader)}`
												: "#"
										}
										className={`text-xs md:text-sm font-minor font-semibold tracking-wider mt-4 px-3 py-1 self-start rounded-full transition-colors duration-300 ease-in-out ${
											isActive
												? "text-white bg-[var(--color-orange-dark)] border border-[var(--color-orange-dark)] hover:text-[var(--color-orange-dark)] hover:bg-white hover:border-[var(--color-orange-dark)] cursor-pointer"
												: "text-gray-400 bg-gray-200 border border-gray-200 pointer-events-none"
										}`}
									>
										Read More &nbsp;→
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Dot Indicators */}
			<div className="flex justify-center mt-6 space-x-2">
				{articles.map((_, index) => (
					<button
						key={index}
						onClick={() => goToIndex(index)}
						className={`w-3 h-3 rounded-full transition-colors ${
							index === activeIndex
								? "bg-[var(--color-orange-dark)]"
								: "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</>
	);
};
