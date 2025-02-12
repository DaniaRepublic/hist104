"use client"

import { useState } from "react"

interface DidYouKnowCardProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export default function DidYouKnowCard({ question, answer, isOpen, onClick }: DidYouKnowCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`my-4 p-2 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${isHovered ? "bg-blue-100" : "bg-gray-100"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">Did You Know?</h3>
      <p>{isOpen ? answer : question}</p>
      <p className="text-sm text-gray-600 mt-2">{isOpen ? "Click to close" : "Click to reveal"}</p>
    </div>
  )
}

