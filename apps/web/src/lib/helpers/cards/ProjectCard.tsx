import { Card } from '@/components/ui/card/card-shad'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom' // or next/router if using Next.js
import { ArrowRight } from 'lucide-react'
import type { ProjectCardProps } from '@/lib/types'
import { cardStyles } from '@/lib/styles'
import { Button } from '@/components/ui'

export function ProjectCard({ project, onNavigate }: ProjectCardProps ) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onNavigate) onNavigate(project.id)
    else navigate(`/work/${project.id}`)
  }

  return (
    <Card
      onClick={handleClick}
      className={
        cardStyles.base}
    >
      <div className={cardStyles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={cardStyles.image}
        />
      </div>

      <div className={cardStyles.content}>
        <Badge variant="filled" size="sm" color="neutral" shape="square">{project.category}</Badge>
        <h3 className={cardStyles.title}>{project.title}</h3>
        <p className={cardStyles.subtitle}>{project.subtitle}</p>

        <div className={cardStyles.footer}>
          <p className={cardStyles.tag}>{project.tag}</p>
          <Button size="sm" variant="ghost" color="primary">
            View Case Study
            <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary" />
          </Button>
        </div>
      </div>
    </Card>
  )
}