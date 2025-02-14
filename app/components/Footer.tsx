import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-white py-4">
      <div className="max-w-5xl mx-auto px-2 lg:px-0 flex justify-between">
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="hover:underline text-white">
          About
        </Link>
      </div>
    </footer>
  )
}

