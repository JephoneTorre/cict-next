"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// Dynamically import SyntaxHighlighter with no SSR
const SyntaxHighlighter = dynamic(
    () => import("react-syntax-highlighter").then((mod) => mod.Prism),
    { ssr: false },
);

// Import the style normally (it's just an object)
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
                em: ({ children }) => <em className="italic">{children}</em>,
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-600 dark:text-gray-100 dark:bg-gray-900 bg-gray-50 rounded-r">
                        {children}
                    </blockquote>
                ),
                code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");

                    if (match) {
                        return (
                            <SyntaxHighlighter
                                style={oneDark}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg my-4"
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        );
                    }

                    return (
                        <code
                            className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono dark:bg-gray-800 dark:text-red-400"
                            {...props}
                        >
                            {children}
                        </code>
                    );
                },
                pre: ({ children }) => <>{children}</>,
                // ...existing code...
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
                // ...existing code...
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
