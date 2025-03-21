"use client"

import { useState } from "react"
import DidYouKnowCard from "./DidYouKnowCard"
import TooltipCard from "./TooltipCard"
import React from "react" // Added import for React
import { RenderMarkdown } from "./MarkdownRenderer"

// <DidYouKnow question="..." answer="..." />
// <TooltipCard term="..." definition="..." />


export default function EssayContent({ essayContent }: { essayContent: string }) {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  const renderMarkdown = (content: string) => {
    const parts = content.split(/(<DidYouKnow[^>]*\/>|<TooltipCard[^>]*\/>)/)

    return parts.map((part, idx) => {
      if (!part.startsWith("<DidYouKnow") && !part.startsWith("<TooltipCard")) {
        return <React.Fragment
          key={idx}
        >
          <RenderMarkdown text={part} />
        </React.Fragment>
      }

      if (part.startsWith("<DidYouKnow")) {
        const question = part.match(/question="([^"]*)"/)?.[1] || ""
        const answer = part.match(/answer="([^"]*)"/)?.[1] || ""

        return (
          <React.Fragment key={idx}>
            <DidYouKnowCard
              question={question}
              answer={answer}
              isOpen={openCard === idx}
              onClick={() => handleCardClick(idx)}
            />
          </React.Fragment>
        )
      }
      else if (part.startsWith("<TooltipCard")) {
        const term = part.match(/term="([^"]*)"/)?.[1] || ""
        const definition = part.match(/definition="([^"]*)"/)?.[1] || ""
        const src = part.match(/src="([^"]*)"/)?.[1] || ""
        const caption = part.match(/caption="([^"]*)"/)?.[1] || ""

        return (
          <React.Fragment key={idx}>
            {" "}<TooltipCard term={term} definition={definition} imgSrc={src} imgCaption={caption} />{" "}
          </React.Fragment>
        )
      }
    })
  }

  return <div className="prose">{renderMarkdown(essayContent)}</div>
}

