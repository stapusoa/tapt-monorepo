import { type VariantProps } from "class-variance-authority"
import { bentoGridVariants, bentoItemVariants, ctaVariants, featureVariants, heroVariants, statsVariants, testimonialsVariants } from "./constants"

export interface BentoGridProps extends VariantProps<typeof bentoGridVariants> {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export interface BentoItemProps extends VariantProps<typeof bentoItemVariants> {
  children: React.ReactNode
  className?: string
}

export interface CTAProps extends VariantProps<typeof ctaVariants> {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export interface FeatureProps extends VariantProps<typeof featureVariants> {
  title: string
  subtitle?: string
  description: string
  image?: string
  imageAlt?: string
  children?: React.ReactNode
  className?: string
}

export interface HeroProps extends VariantProps<typeof heroVariants> {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  backgroundOpacity?: number
}

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface StatsProps extends VariantProps<typeof statsVariants> {
  title?: string
  subtitle?: string
  stats: Stat[]
  className?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}

export interface TestimonialsProps extends VariantProps<typeof testimonialsVariants> {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  className?: string
}
