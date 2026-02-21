// [IMPORT] Standard
import Image from "next/image";
import Link from "next/link";

interface NewsArticle {
	id: number;
	imgSrc?: string;
	date: string;
	newsHeader: string;
	content: string;
}

// Mock data (to be implemented /w Strapi)
const newsArticles: NewsArticle[] = [
	{
		id: 1,
		imgSrc: "",
		date: "02/01/2026",
		newsHeader: "WVSU-CICT Presents Tech Solutions at ICC 2025 in Taiwan",
		content: "Full content for ICC 2025 news goes here...",
	},
	{
		id: 2,
		imgSrc: "",
		date: "02/02/2026",
		newsHeader: "CICT Faculty Publishes AI Research Paper",
		content: "Full content for AI research news goes here...",
	},
	{
		id: 3,
		imgSrc: "",
		date: "02/03/2026",
		newsHeader: "New Student Projects Showcase 2026",
		content: "Full content for student projects news goes here...",
	},
];

// Utility to generate slug (same as in carousel)
const generateSlug = (text: string) =>
	text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

interface PageProps {
	params: Promise<{ slug: string }>;
}

const NewsAnnouncements = async ({ params }: PageProps) => {
	const { slug } = await params;
	const article = newsArticles.find(
		(a) => generateSlug(a.newsHeader) === slug
	);

	if (!article) {
		return (
			<div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
				<Image
					src="/not-found-icon.svg"
					alt="Not Found"
					width={120}
					height={120}
					className="mb-6"
				/>
				<h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
					Article Not Found
				</h2>
				<p className="text-gray-500 mb-6">
					The article you are looking for does not exist or has been removed.
				</p>
				<Link
					href="/news-announcements"
					className="px-6 py-2 rounded-full font-minor text-sm font-semibold bg-orange-dark text-white hover:bg-orange-light transition-colors"
				>
					Back to News
				</Link>
			</div>
		);
	}

	return (
		<div className="px-8 py-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-4">{article.newsHeader}</h1>
			<p className="text-sm text-gray-500 mb-6">{article.date}</p>
			{article.imgSrc && (
				<Image
					src={article.imgSrc}
					alt={article.newsHeader}
					className="w-full max-w-xl mb-6 rounded-lg"
					width={800}
					height={450}
				/>
			)}
			<p className="text-base leading-relaxed">{article.content}</p>
		</div>
	);
};

export default NewsAnnouncements;