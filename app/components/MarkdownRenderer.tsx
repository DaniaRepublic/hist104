import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function RenderMarkdown({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <span>{children}</span>,
        img: ({ src, alt }) => (
          <div className="max-w-[1024px] h-96 relative mb-4 m-auto">
            <Image
              src={src || ""}
              alt={alt || "Image"}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
