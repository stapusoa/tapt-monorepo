import { caseStudies } from "@/lib/data/caseStudies"
import { ProjectCard } from "@/lib/helpers/cards/ProjectCard"
import { workStyles } from "@/lib/styles"

export function Work({ onNavigate }: { onNavigate: (projectId: string) => void }) {
  return (
    <section className={workStyles.section}>
      <header className={workStyles.header}>
        <h1 className={workStyles.title}>My Work</h1>
        <p className={workStyles.subtitle}>
          A selection of case studies showcasing design, engineering, and product impact.
        </p>
      </header>

      <div className={workStyles.grid}>
        {caseStudies.map((project: any) => (
          <div key={project.id} onClick={() => onNavigate(project.id)}>
            <ProjectCard project={project as any} />
          </div>
        ))}
      </div>
    </section>
  )
}

