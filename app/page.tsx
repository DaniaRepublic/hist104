import Link from "next/link";

export default function Home() {
  return (
    <div >
      <ol>
        <li><Link href="/analysis/1">Analysis 1</Link></li>
        <li><Link href="/analysis/2">Analysis 2</Link></li>
      </ol>
    </div>
  )
}

