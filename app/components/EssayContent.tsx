"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import DidYouKnowCard from "./DidYouKnowCard"
import TooltipCard from "./TooltipCard"
import React from "react" // Added import for React

const essayContent = `
# **The Evolution of American Society: Struggle for Rights and Identity from 1890 to 1929**

Between 1890 and 1929, the United States underwent significant social and political transformations as marginalized groups fought for recognition, rights, and identity amidst widespread resistance. Despite oppressive structures, African Americans and women actively challenged their disenfranchisement, laying the foundation for future civil rights advancements. This period showcased a burgeoning assertion of rights by these groups, leading to gradual but profound shifts in American society.

## **The Fight Against Racial Violence and the Quest for African American Identity**

The late 19th and early 20th centuries were marked by rampant racial violence, particularly lynchings, which were used to terrorize African American communities and reinforce white supremacy. Activist Ida B. Wells-Barnett emerged as a leading voice against this brutality. In her seminal work, **"Lynch Law in America" (1900)**, Wells-Barnett exposed the horrors of lynching, arguing that it was not a response to crime but a means to maintain racial hierarchy. She declared, *"Our country's national crime is lynching"* (Wells-Barnett, 1900), emphasizing that such acts were a systemic problem requiring national attention.

<DidYouKnow question="Who was Ida B. Wells-Barnett?" answer="Ida B. Wells-Barnett was an African American journalist and activist who led an anti-lynching crusade in the United States during the late 19th and early 20th centuries." />

In response to continued oppression, African Americans sought to redefine their identity and assert their rights. The <TooltipCard term="Universal Negro Improvement Association (UNIA)" definition="An organization founded by Marcus Garvey in 1914 to establish a sense of pride and unity among people of African descent worldwide, advocating for economic self-sufficiency and the establishment of an independent Black nation." />, founded by Marcus Garvey, aimed to promote racial pride, economic self-sufficiency, and the formation of an independent Black nation. The **"Explanation of the Objects of the Universal Negro Improvement Association" (1921)** outlined these goals, stating that the UNIA was organized *"for the absolute purpose of bettering our condition, industrially, commercially, socially, religiously and politically"* (UNIA, 1921). This movement empowered African Americans to take pride in their heritage and strive for autonomy.

## **The Women's Suffrage Movement and the Pursuit of Equality**

Concurrently, women intensified their struggle for equal rights, focusing on suffrage as a critical step toward broader societal participation. Suffragist **Alice Stone Blackwell**, in **"Answering Objections to Women's Suffrage" (1917)**, systematically dismantled arguments against women's voting rights. She refuted the notion that women did not desire the vote or that it would disrupt social norms, asserting that women's perspectives were essential for a just society. Blackwell argued, *"Because women are human beings, and no class of human beings should be deprived of the rights which others enjoy"* (Blackwell, 1917).

<DidYouKnow question="Did you know how Alice Stone Blackwell contributed to women's suffrage?" answer="Alice Stone Blackwell was a key figure in the women's suffrage movement, advocating for voting rights and gender equality through her writings and activism." />

Following the successful ratification of the 19th Amendment in 1920, granting women the right to vote, activists recognized that suffrage was a milestone rather than the culmination of their efforts. **Crystal Eastman**, in her essay **"Now We Can Begin" (1920)**, articulated a vision for continued activism. She contended that true equality extended beyond political rights to include economic independence and the dismantling of gender-based societal constraints. Eastman proclaimed, *"We have reached the time when we can no longer postpone any of the fundamental things"* (Eastman, 1920), calling for persistent efforts toward full equality.

## **The Harlem Renaissance and the Rebirth of African American Culture**

The 1920s heralded a cultural revolution known as the Harlem Renaissance, during which African American artists, writers, and intellectuals celebrated Black culture and challenged racial stereotypes. Philosopher **Alain Locke**, in his essay **"Enter the New Negro" (1925)**, encapsulated the spirit of this movement. He described a transformation from the "Old Negro," burdened by oppression, to the "New Negro," characterized by self-respect and a refusal to submit to injustices. Locke wrote, *"The day of 'aunties,' 'uncles' and 'mammies' is equally gone... We are achieving something like a spiritual emancipation"* (Locke, 1925). This shift signified a collective reclamation of identity and agency.

<DidYouKnow question="What was the significance of Alain Locke's concept of the 'New Negro'?" answer="Alain Locke's 'New Negro' symbolized a renewed sense of racial pride and cultural self-expression among African Americans during the Harlem Renaissance." />

The Harlem Renaissance not only fostered a sense of pride within the African American community but also influenced broader American culture. It challenged prevailing perceptions of race and demonstrated the profound contributions of Black Americans to the nation's artistic and intellectual life.

## **Conclusion**

From 1890 to 1929, marginalized groups in the United States made significant strides in asserting their rights and redefining their identities. Through activism against racial violence, the fight for women's suffrage, and cultural movements like the Harlem Renaissance, African Americans and women challenged oppressive systems. Their efforts led to gradual societal transformations, setting the stage for future civil rights advancements. This era underscores the power of collective action and the enduring pursuit of equality in American history.

## **Bibliography**

- Blackwell, Alice Stone. **"Answering Objections to Women's Suffrage."** (1917). [*American Yawp Reader link*](http://www.americanyawp.com/reader/20-the-progressive-era/alice-stone-blackwell-answering-objections-to-womens-suffrage-1917/).

- Eastman, Crystal. **"Now We Can Begin."** (1920). [*American Yawp Reader link*](http://www.americanyawp.com/reader/22-the-new-era/crystal-eastman-now-we-can-begin-1920/).

- Locke, Alain. **"Enter the New Negro."** (1925). [*American Yawp Reader link*](http://www.americanyawp.com/reader/22-the-new-era/alain-locke-on-the-new-negro-1925/).

- Wells-Barnett, Ida B. **"Lynch Law in America."** (1900). [*American Yawp Reader link*](http://www.americanyawp.com/reader/19-american-empire/ida-b-wells-barnett-lynch-law-in-america-1900/).

- Universal Negro Improvement Association. **"Explanation of the Objects of the Universal Negro Improvement Association."** (1921). [*American Yawp Reader link*](http://www.americanyawp.com/reader/20-the-progressive-era/explanation-of-the-objects-of-the-universal-negro-improvement-association-1921/).
`

export default function EssayContent() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  const renderMarkdown = (content: string) => {
    const parts = content.split(/(<DidYouKnow[^>]*\/>|<TooltipCard[^>]*\/>)/)

    return parts.map((part, idx) => {
      if (!part.startsWith("<DidYouKnow") && !part.startsWith("<TooltipCard")) {
        return <ReactMarkdown
          key={idx}
          components={{
            p: ({ children }) => <span>{children}</span>
          }}
        >{part}</ReactMarkdown>
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

        return (
          <React.Fragment key={idx}>
            {" "}<TooltipCard term={term} definition={definition} />{" "}
          </React.Fragment>
        )
      }
    })
  }

  return <div className="prose max-w-none">{renderMarkdown(essayContent)}</div>
}

