import { caseStudies } from "@/lib/data/featuredWork"
import { Button } from '@/components/ui/button'
import { ProjectCard } from "@/lib/helpers/cards/ProjectCard"
import { workStyles } from "@/lib/styles"

import { motion } from 'framer-motion'


export function FeaturedProjects({
  onNavigate,
}: { onNavigate: (projectId: string) => void }) {
  return (
    <div className="relative shrink-0 -mt-1 pt-24 pb-8 px-6 md:px-12 w-full bg-white">
      <div className="grid grid-flow-rows relative size-full mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="typography text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 title-lg">Featured Work</h2>
          <p className="body-lg text-default max-w-2xl mx-auto">
            Recent projects showcasing different aspects of UX
            design, from research to implementation.
          </p>
        </motion.div>

        <div className={workStyles.grid}>
          {caseStudies.map((project: any) => (
            <div key={project.id} onClick={() => onNavigate(project.id)}>
              <ProjectCard project={project as any} />
            </div>
          ))}
        </div>

        <div className="text-center my-12">
          <Button
            variant="outlined"
            size="lg"
            onClick={() => onNavigate("work")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
