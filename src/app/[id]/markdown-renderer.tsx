"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownRenderer({ content }: { content: string }) {
    if (!content) return null;

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
                ),
                p: ({ children }) => (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {children}
                    </p>
                ),
                strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                ),
                img: ({ src, alt }) => {
                    if (!src || typeof src !== "string") return null;
                    return (
                        <span className="block my-4" suppressHydrationWarning>
                            <Image
                                src={src}
                                alt={alt || ""}
                                width={800}
                                height={450}
                                className="rounded-lg shadow-md mx-auto"
                                style={{ width: "100%", height: "auto" }}
                                suppressHydrationWarning
                            />
                        </span>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
