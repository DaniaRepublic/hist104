import { RenderMarkdown } from "@/app/components/MarkdownRenderer";
import { text as post1 } from "../../essays/1.ts";
import { text as post2 } from "../../essays/2.ts"
import EssayContent from "@/app/components/EssayContent";


export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  switch (Number(id)) {
    case 1: {
      return <EssayContent essayContent={post1} />
    }
    case 2: {
      return <EssayContent essayContent={post2} />
    }
    default: {
      return <h2>Not found.</h2>
    }
  }
}
