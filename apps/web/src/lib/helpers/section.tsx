import React from "react"

interface TitleProps {
  titleFull?: boolean;
  title?: string;
}

interface TextProps {
  isRight?: boolean;
  isLeft?: boolean;
  isColumn?: boolean;
  isGrid?: boolean;
  text?: string[];
}

interface ImageProps {
  isRight?: boolean;
  isLeft?: boolean;
  isFull?: boolean;
  isGrid?: boolean;
  image?: string[];
  columns?: number;
}

interface SectionProps {
  title?: TitleProps;
  text?: TextProps;
  image?: ImageProps;
  list?: string[];
  keynotes?: { label: string; details: string }[];
  labels?: string[];
  iconPoint?: string[];
  highlight?: string[];
  chart?: React.ReactNode;
  painPoints?: React.ReactNode;
  card?: React.ReactNode;
  questions?: React.ReactNode;
  map?: React.ReactNode;
  siteMap?: React.ReactNode;
  button?: React.ReactNode;
  stickyNote?: React.ReactNode;
  animation?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  text,
  image,
  keynotes,
  button,
}) => {
  // ✅ Change padding dynamically based on `isGrid`
  const containerPadding = image?.isGrid ? "pl-6" : "px-6"
  const siblingPadding = image?.isGrid ? "pr-6" : ""

  // ✅ Condition: If both text and image are left, arrange them in the correct layout
  const isGroupedLeft = text?.isLeft && image?.isLeft

  return (
    <div className={`bg-transparent mx-auto max-w-300 relative z-32 pt-16 pb-12 ${containerPadding} sm:${containerPadding} md:px-14 lg:px-32 grid grid-cols-8 gap-8 items-start`}>

      {/* ✅ Title */}
      {title?.title && (
        <div className={`py-2 text-left ${title.titleFull ? "col-span-8" : "col-span-8 md:col-span-4"} ${siblingPadding}`}>
          <h5 className="h3 pb-8 font-600 tracking-wide">{title.title}</h5>
        </div>
      )}

      {/* ✅ When text & image are left, enforce correct structure */}
      {isGroupedLeft ? (
        <>
          {/* ✅ Text (Left, 4 Cols) & Keynotes (Right, 4 Cols) */}
          <div className="col-span-8 md:col-span-4 flex flex-col gap-4">
            {text?.text && (
              <div className="m-0 p-0 font-gilroy text-grey-600 text-left font-300 text-6 leading-relaxed">
                {text.text.map((paragraph, index) => (
                  <p key={index} className="m-0">{paragraph}</p>
                ))}
              </div>
            )}

            {/* ✅ Button (Below Image) */}
            {button && (
              <div className="w-fit mt-2">
                {button}
              </div>
            )}

            {/* ✅ Image (Below Text, Minimal Space) */}
            {image?.image && (
              <div className="w-full">
                {image.image.map((img, index) => (
                  <img key={index} src={img} alt={`Section Image ${index}`} className="w-full h-auto rounded-lg mt-2" />
                ))}
              </div>
            )}


          </div>

          {/* ✅ Keynotes (On Right) */}
          {keynotes && (
            <div className="col-span-8 md:col-span-4 flex flex-col gap-8">
              {keynotes.map((keynote, index) => (
                <div key={index} className="grid gap-2">
                  <div className="m-0 text-left font-gilroy font-300 text-6 text-grey-600 tracking-wide">
                    {keynote.label}
                  </div>
                  <div className="m-0 text-left font-gilroy text-grey-600 font-300 text-6 leading-relaxed">
                    {keynote.details}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {/* ✅ Default Layout (Stacked) */}
          {text?.text && (
            <div
              className={`m-0 p-0 font-gilroy text-grey-600 text-left font-300 text-6 leading-relaxed 
              col-span-8 ${text.isRight ? "md:col-start-5 md:col-span-4" : "col-span-8 md:col-span-4 row-span-2"} 
              ${text.isColumn ? "grid grid-cols-1 gap-4" : ""}
              ${text.isGrid ? "grid grid-cols-2 gap-8" : ""}
              ${siblingPadding}`}
            >
              {text.text.map((paragraph, index) => (
                <p key={index} className="m-0">{paragraph}</p>
              ))}
            </div>
          )}

{image?.image && (
  <div 
    className={`col-span-8 
      ${image.isRight ? `md:col-start-5 md:col-span-4` : "col-start-1 md:col-span-4"} 
      overflow-x-auto md:overflow-visible 
      grid gap-4 md:gap-6 
      snap-x snap-mandatory scrollbar-hide`}
    style={{
      gridTemplateColumns: `repeat(${image.columns || 1}, minmax(150px, 1fr))`, // ✅ Dynamically setting grid columns
    }}
  >
    {image.image.map((img, index) => (
      <div key={index} className="snap-start flex items-start shrink-0 w-full md:w-auto">
        <img src={img} alt={`Section Image ${index}`} className="w-full h-auto rounded-lg" />
      </div>
    ))}
  </div>
)}

         

          {/* ✅ Button (Appears Below Text) */}
          {button && (
            <div className="w-fit col-span-8 md:col-span-4">
              {button}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Section