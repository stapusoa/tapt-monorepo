import { motion } from 'framer-motion'
import { DesignQuiz } from '@/lib/helpers/DesignQuiz'
 
export function QuizSection() {
return (

    <div className="relative shrink-0 -mt-1 pt-32 px-6 md:px-12 w-full bg-white">
      <div className="flex flex-col relative size-full mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-12 typography"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="title-lg mb-4">
              Find Your Perfect Design Solution
            </h2>
            <p className="body-lg text-gray-600">
              Take this quick quiz to discover which service
              tier fits your project needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DesignQuiz />
          </motion.div>
        </div>
      </div>
)
}