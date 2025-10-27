import SprintCard from "@/lib/helpers/cards/SprintCard"
import clsx from "clsx"

interface WhiteboardProps {
  image: string[];       // ✅ array of image URLs
  statement?: string;    // ✅ optional statement
  alt: string;
  border?: boolean;      // ✅ make optional with default
  columns?: number;      // ✅ optional with default
}

export function Whiteboard({
  image,
  statement,
  alt,
  border = false,
  columns = 6,
}: WhiteboardProps) {
  return (
    <div className="bg-transparent mx-auto overflow-visible relative z-32 pt-12 pb-16 grid grid-cols-1 md:grid-cols-8 gap-8">
      
      {/* Text Section */}
      <p className="m-0 col-span-full md:col-span-2 text-left font-gilroy font-300 text-6 text-grey-800 tracking-wide">
        ideation
      </p>

      {statement && (
        <p className="m-0 col-span-full md:col-span-6 text-left font-gilroy font-300 text-6 text-grey-900 leading-relaxed">
          {statement}
        </p>
      )}

      {/* Image Section */}
      <div
        className={clsx(
          "col-span-full grid gap-4 order-2",
          `md:grid-cols-${columns}` // ✅ dynamic columns
        )}
      >
        {image.map((img, index) => (
          <SprintCard key={index} image={img} alt={alt} border={border} />
        ))}
      </div>
    </div>
  )
}