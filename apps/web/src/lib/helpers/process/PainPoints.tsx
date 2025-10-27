import React from "react"

interface PainPointsProps {
  problem: string;
  description: string;
  number: string;
}

const PainPoints: React.FC<PainPointsProps> = ({ problem, description, number }) => (
  <div className="relative col-span-full md:col-span-1 w-full md:max-w-300 h-full md:min-h-40 bg-transparent z-32 rounded-lg shadow group">
    {/* Wrapper for overflow control */}
    <div className="relative overflow-hidden h-full rounded-lg">
      {/* Expanding overlay */}
      <div className="absolute aspect-square -top-22 left-1/2 -translate-x-1/2 rounded-full inset-0 bg-primary scale-0 transition-transform duration-800 group-hover:scale-[6] z-0"></div>
      {/* Content */}
      <div className="relative z-10 px-4 pt-8 pb-3">
        <h6 className="m-0 text-center font-gilroy font-500 text-gray-700 group-hover:text-white tracking-wide leading-cozy text-5">
          {problem}
        </h6>
      </div>
      <div className="relative z-10 px-4 py-0">
        <p className="m-0 text-center font-gilroy font-300 tracking-wide leading-tight text-gray-600 group-hover:text-white text-4.5">
          {description}
        </p>
      </div>
    </div>

    {/* Circle (outside overflow) */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
        <h6 className="font-gilroy font-400 text-white text-3.5">{number}</h6>
      </div>
    </div>
  </div>
)

export default PainPoints