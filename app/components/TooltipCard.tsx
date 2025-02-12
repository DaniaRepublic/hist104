import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function TooltipCard({ term, definition }: { term: string, definition: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger className="inline-block text-orange-700 cursor-help">{term}</HoverCardTrigger>
      <HoverCardContent>
        {definition}
      </HoverCardContent>
    </HoverCard>
  )
}
