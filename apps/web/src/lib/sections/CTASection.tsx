import { motion } from 'framer-motion'
 import { Button } from '@/components/ui/button'
import type { PageType } from '@/components/ui/navigation/types'

interface CTAProps {
   onNavigate: (page: PageType) => void
   onClick?: () => void
 }

export function CTASection({ onNavigate, onClick }: CTAProps) {
return (
     <div className="relative shrink-0 -mt-1 py-32 px-6 md:px-12 w-full bg-black">
      <div className="flex flex-col relative size-full mx-auto max-w-7xl">
   
        <motion.div
          className="max-w-4xl mx-auto text-center typography"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="title-lg mb-6 text-background">
            Ready to work together?
          </h2>
          <p className="body-lg mb-8 text-background/80 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect
            solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outlined"
              onClick={() => {
                onClick?.()
                onNavigate("services")}}
            >
              View Services & Pricing
            </Button>
            <Button
              size="lg"
              variant="outlined"
              className="border-background text-background hover:bg-background hover:text-foreground"
              onClick={() => {
                onClick?.()
                onNavigate("contact")}}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
)}