import SprintCard from "@/lib/helpers/cards/SprintCard" // ✅ default import

interface GoalProps {
  sticky: string[]; // ✅ array of image URLs
  statement?: string; // ✅ single string (not array)
  alt: string;
}

export function Goal({ sticky, statement, alt }: GoalProps) {
  return (
    <div className="bg-transparent mx-auto overflow-visible relative z-32 pt-12 pb-16 grid grid-cols-1 md:grid-cols-8 gap-8">
      
      {/* Text Section */}
      <div className="col-span-full md:col-span-4 flex flex-col gap-4 order-1 md:order-3">
        <p className="m-0 text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">
          goal
        </p>

        {statement && (
          <p className="m-0 text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
            {statement}
          </p>
        )}
      </div>

      {/* Image Section */}
      <div className="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4 order-2">
        {sticky.map((img, index) => (
          <SprintCard key={index} image={img} alt={alt}/>
        ))}
      </div>
    </div>
  )
}