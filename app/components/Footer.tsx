import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-white p-4">
      <div className="container mx-auto flex justify-between space-x-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    </footer>
  )
}

