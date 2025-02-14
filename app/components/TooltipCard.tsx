import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { RenderMarkdown } from "./MarkdownRenderer"
import Image from "next/image"

export default function TooltipCard({ term, definition, imgSrc, imgCaption }: { term: string, definition: string, imgSrc?: string, imgCaption?: string }) {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger className="inline text-orange-700 cursor-help underline">{term}</HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="flex flex-row space-x-4 items-center">
          {/* Wrapper div ensures fixed dimensions */}
          {imgSrc ?
            <div className="flex flex-col space-y-1 text-center">
              <div className="w-28 h-24 relative">
                <Image
                  src={imgSrc}
                  alt="caption"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <p className="text-xs">{imgCaption}</p>
            </div>
            :
            <></>
          }
          <div className="prose w-fit text-sm">
            <RenderMarkdown text={definition} />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

