import React, { useState, useRef, useEffect } from "react"
import {
  WhenIllustration,
  WhereIllustration,
  WhoIllustration,
  WhyIllustration,
} from "@/components/ui/illustrations/index"

const Illustrations = {
  who: <WhoIllustration />,
  when: <WhenIllustration />,
  where: <WhereIllustration />,
  why: <WhyIllustration />,
}

export interface CardProps {
  image: keyof typeof Illustrations; // 'who' | 'when' | 'where' | 'why'
  question: string;
  statement: string;
}

const QuestionCard: React.FC<CardProps> = ({ image, question, statement }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      })
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const rX = (mousePos.x / dimensions.width) * 30 || 0
  const rY = (mousePos.y / dimensions.height) * -30 || 0

  return (
    <div
      className="relative w-full h-80 perspective-800 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="relative w-full h-80 px-2 pt-2 pb-3 rounded-lg overflow-hidden shadow-lg transition-transform duration-1000"
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        }}
      >
        <div className="relative h-full overflow-hidden rounded-lg border-1 border-solid border-primary">
          <div className="absolute z-20 top-0 left-0 p-4">
            <h1 className="m-0 pb-2 font-gilroy font-500 text-primary tracking-wide leading-cozy text-6">
              {question}
            </h1>
            <p className="m-0 text-grey-500 font-gilroy text-left text-4.5 font-300">
              {statement}
            </p>
          </div>
          <div className="absolute inset-0 transition-all duration-1000 transform group-hover:translate-y-100 flex items-center justify-center">
            {Illustrations[image]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard