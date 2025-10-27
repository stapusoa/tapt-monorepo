import PersonaCard from "../cards/PersonaCard"
import type { CardProps } from "../cards/PersonaCard"

interface UserPersonasProps {
  cards: CardProps[];
}

export function UserPersonas({ cards }: UserPersonasProps) {
  return (
    <div className="grid grid-flow-col col-span-full md:col-span-8 h-fit overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8">
      {cards.map((card, index) => (
        <div key={index} className="col-span-[1.5] md:col-span-2 snap-start shrink-0 h-fit">
          <PersonaCard
            image={card.image}
            title={card.title}
            job={card.job}
            age={card.age}
            quote={card.quote}
            bio={card.bio}
            frustrations={card.frustrations}
            motivations={card.motivations}
          />
        </div>
      ))}
    </div>
  )
}