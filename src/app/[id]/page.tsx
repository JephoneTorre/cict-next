


const STRAPI_URL = "http://localhost:1337";

export default async function PreviewPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (typeof id !== "string") {
        return <div>Invalid article ID</div>;
    }

    const response = await fetch(
        `${STRAPI_URL}/api/posts/${id}?populate=*`,
    );
    
    const json = await response.json();
    const article = json.data;

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
            {article && (
                <div className="max-w-4xl p-4 mx-auto w-full h-full">
                <pre>
                    {JSON.stringify(article, null, 2)}                       
                    </pre>
                </div>
            )}
        </>
    );
}
