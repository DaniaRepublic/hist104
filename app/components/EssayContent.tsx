"use client"

import { useState } from "react"
import DidYouKnowCard from "./DidYouKnowCard"
import TooltipCard from "./TooltipCard"
import React from "react" // Added import for React
import { RenderMarkdown } from "./MarkdownRenderer"

// <DidYouKnow question="..." answer="..." />
// <TooltipCard term="..." definition="..." />

const essayContent = `
# Redefining American ideals: African American and women's activism from 1890 to 1929

Between 1890 and 1929, African Americans and women in the United States not only fought against oppressive systems but also changed the nation's ideas about freedom and equality. Through persistent activism and contributions, these marginalized groups exposed the contradictions between America's stated democratic ideals and its discriminatory practices. I make an argument that their efforts during this period redefined American identity by pushing society to rethink views on race and gender.

## The women's suffrage movement and the pursuit of equality

![Women's Suffrage Movement](https://image.pbs.org/video-assets/Hs9QJX2-asset-mezzanine-16x9-B4ZiKE7.jpg?focalcrop=1200x630x50x10&format=auto)

At the same time, women intensified their fight for voting rights and equality, challenging traditional gender roles that kept them confined to home. Suffragist <TooltipCard term="Alice Stone Blackwell" definition="[Alice Stone Blackwell](https://en.wikipedia.org/wiki/Alice_Stone_Blackwell) (September 14, 1857 - March 15, 1950) was an American feminist, suffragist, journalist, radical socialist, and human rights advocate." src="https://www.dorchesterhistoricalsocietyblog.org/wp-content/uploads/2022/10/2590-Alice-Stone-Blackwell.jpg" caption="Alice Stone Blackwell" /> in **"Answering Objections to Women's Suffrage" (1917)** dismantled the arguments against women's right to vote. She argued *"Because women are human beings, and no class of human beings should be deprived of the rights which others enjoy"* stating that denying women the vote was inherently undemocratic.

<DidYouKnow question="Did you know how Alice Stone Blackwell contributed to women's suffrage?" answer="Alice Stone Blackwell was a key figure in the women's suffrage movement, advocating for voting rights and gender equality through her writings and activism." />

After the 19th Amendment was passed in 1920, granting women the right to vote, activists like **Crystal Eastman** realized that legal rights were only part of the struggle. In her essay **"Now We Can Begin" (1920)**, Eastman argued that achieving true equality meant rethinking societal values related to gender roles, work, and family. She declared *"We have reached the time when we can no longer postpone any of the fundamental things"* pionting out the need for a complete transformation of American society.

## Confronting racial violence

![Lynching Laws](https://assets.editorial.aetnd.com/uploads/2019/01/lynching-laws-1930s-getty_514901756_feature.jpg?width=768)

During a time of widespread racial violence lynching used to terrorize African American communities. Journalist and activist <TooltipCard term="Ida B. Wells-Barnett" definition="[Ida B. Wells-Barnett](https://www.womenshistory.org/education-resources/biographies/ida-b-wells-barnett) was an African American journalist and activist who led an anti-lynching crusade in the United States during the late 19th and early 20th centuries." src="https://wams.nyhistory.org/wp-content/uploads/2018/11/MA-Extra.-Ida-B.-Wells-1200x1781.jpg" caption="Ida B. Wells-Barnett" /> became a critic of the status quo. In her important essay, **"Lynch Law in America" (1900)**, Wells-Barnett revealed lynching as a barbaric practice that contradicted America's claims of justice and civilization. She stated that *"Our country's national crime is lynching"* highlighting the hypocrisy of a nation that promoted liberty while allowing racially motivated killings without legal reprocussions.\

In response to ongoing oppression, African Americans worked to redefine their identity and claim their rights. The <TooltipCard term="Universal Negro Improvement Association (UNIA)" definition="An organization founded by [Marcus Garvey](https://en.wikipedia.org/wiki/Marcus_Garvey) in 1914 to establish a sense of pride and unity among people of African descent worldwide, advocating for economic self-sufficiency and the establishment of an independent Black nation." src="https://cdn.britannica.com/66/115666-050-F4556AD6/Marcus-Garvey-session-Universal-Negro-Improvement-Association-1924.jpg?w=400&h=300&c=crop" caption="Marcus Garvey" /> aimed to encourage racial pride, economic independence, and the formation of an independent Black nation. In the **"Explanation of the Objects of the Universal Negro Improvement Association" (1921)**, the UNIA outlined these goals, stating it was organized *"for the absolute purpose of bettering our condition, industrially, commercially, socially, religiously and politically"*.

## The "New Negro" movement: redefining African American identity

![Harlem Renaissance](https://assets.editorial.aetnd.com/uploads/2009/10/topic-harlem-renaissance-gettyimages-517322608.jpg)

The 1920s marked a cultural revolution known as the <TooltipCard term="Harlem Renaissance" definition="The Harlem Renaissance was an intellectual and cultural revival of African-American music, art, fashion and politics centered in Harlem, New York City throughout the 1920s and 1930s." />. During this time, African American artists, writers, and thinkers celebrated Black culture and challenged racial stereotypes. Philosopher **Alain Locke**, in his essay **"The New Negro" (1925)**, captured the spirit of this movement. He described a transformation from the "Old Negro," characterized by oppression, to the "New Negro," characterized by self-respect and a refusal to accept injustices.

<DidYouKnow question="What was the significance of Alain Locke's concept of the 'New Negro'?" answer="Alain Locke's 'New Negro' symbolized a renewed sense of racial pride and cultural self-expression among African Americans during the Harlem Renaissance." />

The Harlem Renaissance not only instilled a sense of pride within the African American community but also influenced broader American culture.

## Conclusion

Between 1890 and 1929, African Americans and women fundamentally challenged and reshaped American identity by exposing the inconsistencies between the nation's stated ideals and its oppressive practices. Ida B. Wells-Barnett's fight against lynching confronted the moral failures that allowed racial violence to continue. The women's suffrage movement broadened democracy by insisting on gender equality. The "New Negro" movement reimagined African American identity. Together, these developments pushed the United States to reevaluate its principles and move toward a more inclusive and fair society.

## Bibliography

- Blackwell, Alice Stone. **"Answering Objections to Women's Suffrage."** (1917). [*American Yawp Reader link*](http://www.americanyawp.com/reader/20-the-progressive-era/alice-stone-blackwell-answering-objections-to-womens-suffrage-1917/).

- Eastman, Crystal. **"Now We Can Begin."** (1920). [*American Yawp Reader link*](http://www.americanyawp.com/reader/22-the-new-era/crystal-eastman-now-we-can-begin-1920/).

- Locke, Alain. **"Enter the New Negro."** (1925). [*American Yawp Reader link*](http://www.americanyawp.com/reader/22-the-new-era/alain-locke-on-the-new-negro-1925/).

- Wells-Barnett, Ida B. **"Lynch Law in America."** (1900). [*American Yawp Reader link*](http://www.americanyawp.com/reader/19-american-empire/ida-b-wells-barnett-lynch-law-in-america-1900/).

- Universal Negro Improvement Association. **"Explanation of the Objects of the Universal Negro Improvement Association."** (1921). [*American Yawp Reader link*](http://www.americanyawp.com/reader/20-the-progressive-era/explanation-of-the-objects-of-the-universal-negro-improvement-association-1921/).

## Resources used

- **Lynching Laws Image**: [A&E Networks](https://assets.editorial.aetnd.com/uploads/2019/01/lynching-laws-1930s-getty_514901756_feature.jpg?width=768)  
- **Ida B. Wells-Barnett**: [National Women's History Museum](https://www.womenshistory.org/education-resources/biographies/ida-b-wells-barnett)  
- **Marcus Garvey and UNIA**: [Britannica](https://cdn.britannica.com/66/115666-050-F4556AD6/Marcus-Garvey-session-Universal-Negro-Improvement-Association-1924.jpg?w=400&h=300&c=crop)  
- **Women's Suffrage Movement Image**: [PBS](https://image.pbs.org/video-assets/Hs9QJX2-asset-mezzanine-16x9-B4ZiKE7.jpg?focalcrop=1200x630x50x10&format=auto)  
- **Alice Stone Blackwell**: [Wikipedia](https://en.wikipedia.org/wiki/Alice_Stone_Blackwell)  
- **Alice Stone Blackwell Image**: [Dorchester Historical Society](https://www.dorchesterhistoricalsocietyblog.org/wp-content/uploads/2022/10/2590-Alice-Stone-Blackwell.jpg)  
- **Harlem Renaissance Image**: [A&E Networks](https://assets.editorial.aetnd.com/uploads/2009/10/topic-harlem-renaissance-gettyimages-517322608.jpg)
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

