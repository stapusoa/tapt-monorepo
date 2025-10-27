import clsx from "clsx"

interface CardProps {
  image: string;
  alt: string;
  border?: boolean;
}

export default function SprintCard({ image, alt, border }: CardProps) {
  return (
    <img
      src={image}
      alt={alt}
      className={clsx(
        "w-full h-auto",
        border && "border-4 border-solid border-neutral-200 shadow-sm rounded-md"
      )}
    />
  )
}