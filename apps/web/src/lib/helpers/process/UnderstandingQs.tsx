import QuestionCard from "../cards/QuestionCard"
import type { CardProps } from "../cards/QuestionCard"

interface Questions {
  cards: CardProps[];
}

export function Understanding({ cards }: Questions) {
  return (
    <div className="bg-transparent mx-auto overflow-visible relative z-32 pt-12 pb-16 grid grid-cols-1 md:grid-cols-8 gap-8">
      {/* User Story & Hypothesis - Appears first on mobile */}
      <div className="col-span-full md:col-span-4 gap-8 order-1 md:order-3 grid grid-auto-flow-row h-fit">
        <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">user story</p>
        <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
          As a business owner who often works outside of the office, I need a way to easily review detailed inventory information on my phone or tablet so that I can make timely decisions without having to wait until I return to my desk, avoiding costly delays and frustration.
        </p>
        <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">hypothesis</p>
        <p className="m-0 p-0 w-full h-fit text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
          We believe enhancing mobile inventory management will help business owners when they are on-the-go.
        </p>
      </div>
      {/* Horizontally Scrollable Cards - Moves below on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:col-span-4 order-1 md:order-2 gap-4 w-full">
        {cards.map((card, index) => (
          <div key={index} className="w-full h-full md:col-span-2">
            <QuestionCard
              key={index}
              image={card.image}
              question={card.question}
              statement={card.statement} />
          </div>
        ))}
      </div>
    </div>
  )
}