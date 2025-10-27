import React, { useState, useRef, useEffect } from "react"

export interface CardProps {
  image: string;
  title: string;
  job: string;
  age?: string;
  quote?: string;
  bio?: string;
  frustrations?: string[];
  motivations?: string[];

}

const PersonaCard: React.FC<CardProps> = ({ image, title, job, age, quote, bio, frustrations, motivations }) => {
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

  const hasHoverContent = Boolean(age || bio || (frustrations && frustrations.length) || (motivations && motivations.length))


  return (
    <div
      className="relative w-60 h-90 perspective-800 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="relative w-60 h-80 p-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-1000"
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
        }}
      >
        <div className="relative h-full overflow-hidden rounded-lg border-1 border-solid border-primary">
        {hasHoverContent && (

          <div
          className={`relative z-20 top-0 left-0 p-4 typography transition-all duration-1000 transform ${
            hasHoverContent ? "-translate-y-32 group-hover:translate-y-0" : ""
          }`}>
              {age && (
            <p className="m-0 pb-4 items-start text-left font-gilroy font-medium text-neutral-800 tracking-wide leading-cozy hidden group-hover:block body-sm">{age}</p>
          )}
          {quote && (
            <p className="m-0 pb-4 items-start text-left font-gilroy italic font-thin text-neutral-700 tracking-wide leading-cozy hidden group-hover:block body-sm">{quote}</p>
          )}
          {bio && (
            <p className="m-0 pb-4 items-start text-left font-gilroy font-thin text-neutral-700 tracking-wide leading-cozy hidden group-hover:block body-sm">{bio}</p>
          )}

            {frustrations && frustrations.length > 0 && (
              <>
                {frustrations.map((frustrations, index) => (
                  <div key={index} className="relative flex justify-start gap-3 items-start">
                    <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="https://www.w3.org/2000/svg">
                      <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#DE5B3E" />
                      <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#DE5B3E" />
                      <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10 12C7.67 12 5.68 13.45 4.88 15.5H6.55C7.24 14.31 8.52 13.5 10 13.5C11.48 13.5 12.75 14.31 13.45 15.5H15.12C14.32 13.45 12.33 12 10 12Z" fill="#DE5B3E" />
                    </svg>
                    <h1 className="m-0 w-full pb-4 pt-0.5 items-start text-left font-gilroy font-thin text-neutral-700 tracking-wide leading-cozy hidden group-hover:block body-sm">{frustrations}</h1>
                  </div>
                ))}
              </>
            )}

            {motivations && motivations.length > 0 && (
              <>
                {motivations.map((motivations, index) => (
                  <div key={index} className="relative flex justify-start gap-3 items-start">
                    <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="https://www.w3.org/2000/svg">
                      <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#81B29A" />
                      <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#81B29A" />
                      <path d="M13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z" fill="#81B29A" />
                      <path d="M6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9Z" fill="#81B29A" />
                      <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10 15.5C12.33 15.5 14.32 14.05 15.12 12H13.45C12.76 13.19 11.48 14 10 14C8.52 14 7.25 13.19 6.55 12H4.88C5.68 14.05 7.67 15.5 10 15.5Z" fill="#81B29A" />
                    </svg>
                    <h1 className="m-0 w-full pb-4 pt-0.5 items-start text-left font-gilroy font-thin text-neutral-700 tracking-wide leading-cozy hidden group-hover:block body-sm">{motivations}</h1>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
          <div className={`absolute z-20 top-0 left-0 p-4 transition-all duration-1000 transform ${
              hasHoverContent ? "group-hover:translate-y-100" : ""
            }`}>

            <h1 className="m-0 pb-2  items-start text-left font-gilroy font-500 text-primary tracking-wide leading-cozy text-6">{title}</h1>
            <p className="m-0  text-neutral-500 font-gilroy text-left body-sm.5 font-thin">
              {job}
            </p>

          </div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform  group-hover:translate-y-100"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>

      </div>

    </div>
  )
}

export default PersonaCard