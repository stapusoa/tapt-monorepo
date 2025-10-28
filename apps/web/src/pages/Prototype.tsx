import { useParams } from "react-router-dom"
import { prototype as prototypes } from "@/lib/data/prototypes"

export interface PrototypeViewerProps {
  src: string
  width?: string | number
  height?: string | number
  title?: string
}

export function Prototype() {
 
  const { prototypeId } = useParams<{ prototypeId: string }>()
  const proto: PrototypeViewerProps | undefined = prototypes.find(p => p.title === prototypeId)

  if (!proto) return <p>Prototype not found</p>


  return (
    <div className="h-full pt-40 bg-neutral-50 py-14 px-4">
      <div className="max-w-4xl mx-auto w-full flex justify-center">
        <iframe
           src={proto.src}
        width={proto.width}
        height={proto.height}
        style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px' }}
        allowFullScreen
        title={proto.title}
        />
      </div>
    </div>
  )
}