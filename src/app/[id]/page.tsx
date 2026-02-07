import Image from "next/image";

function renderBlocks(blocks: any[]) {
    return blocks.map((block, i) => {
        const text = block.children?.map((c: any) => c.text).join("");

        switch (block.type) {
            case "heading":
                if (block.level === 1)
                    return <h1 key={i} className="text-3xl font-bold my-4">{text}</h1>;
                if (block.level === 2)
                    return <h2 key={i} className="text-2xl font-bold my-4">{text}</h2>;
                if (block.level === 3)
                    return <h3 key={i} className="text-xl font-bold my-4">{text}</h3>;
                return <h4 key={i} className="text-lg font-bold my-4">{text}</h4>;

            case "paragraph":
                return (
                    <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {text}
                    </p>
                );

            default:
                return null;
        }
    });
}


export default async function PreviewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (typeof id !== "string") {
        return <div>Invalid article ID</div>;
    }

    if (!process.env.STRAPI_URL) {
        return <div>STRAPI_URL is not defined in environment variables</div>;
    }
    
    const STRAPI_URL = process.env.STRAPI_URL;

    const response = await fetch(
        `${STRAPI_URL}/api/posts/${id}?populate=*`,
    );
    
    const json = await response.json();
    const post = json.data;

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    return (
        <>
             {post && (
                <div className="max-w-4xl p-4 mx-auto w-full h-full">
                    <article key={post.documentId}>
                        {post.image?.url && (
                            <div
                                className="relative w-full h-48"
                                suppressHydrationWarning
                            >
                                <Image
                                    className="w-full h-48 object-cover"
                                    src={STRAPI_URL + post.image.url}
                                    alt={post.title}
                                    width={800}
                                    height={192}
                                    priority
                                    suppressHydrationWarning
                                />
                            </div>
                        )}
                        <div className="py-4">
                            <h3 className="text-lg font-bold mb-2">
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Published: {formatDate(post.timestamp)}
                            </p>
                        </div>
                    </article>

                    {post.body && (
                        <div className="max-w-none">
                            {renderBlocks(post.body)}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
