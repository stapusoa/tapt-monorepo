import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button/button-shad'
import { Card } from '@/components/ui/card/card-shad'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Image } from '@/components/ui/image'
import { ExternalLink, Star, Download, Play, FileText, Table, Figma, Code, ShoppingBag, Zap } from 'lucide-react'
import type { PageType } from '@/components/ui/navigation/types'

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
}

export function Resources({ onNavigate }: ResourcesPageProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const notionTemplates = [
    {
      id: 'project-tracker',
      title: 'UX Project Tracker',
      description: 'Complete project management system for UX designers with research tracking, timeline management, and stakeholder communication.',
      price: '$29',
      rating: 4.9,
      downloads: '2.3k',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['Project Management', 'Research', 'Timeline'],
      link: 'https://notion.so/templates/ux-project-tracker'
    },
    {
      id: 'design-system-docs',
      title: 'Design System Documentation',
      description: 'Professional template for documenting design systems with component library, guidelines, and usage examples.',
      price: '$39',
      rating: 4.8,
      downloads: '1.8k',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
      tags: ['Design System', 'Documentation', 'Components'],
      link: 'https://notion.so/templates/design-system-docs'
    },
    {
      id: 'user-research-hub',
      title: 'User Research Hub',
      description: 'Centralized workspace for user interviews, personas, journey maps, and research insights with automated reporting.',
      price: '$24',
      rating: 4.7,
      downloads: '3.1k',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tags: ['User Research', 'Personas', 'Interviews'],
      link: 'https://notion.so/templates/user-research-hub'
    }
  ]

  const googleSheets = [
    {
      id: 'usability-testing',
      title: 'Usability Testing Tracker',
      description: 'Comprehensive spreadsheet for planning, conducting, and analyzing usability tests with automated scoring and insights.',
      price: 'Free',
      rating: 4.9,
      downloads: '5.2k',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['Testing', 'Analytics', 'Automation'],
      link: 'https://docs.google.com/spreadsheets/d/usability-testing-tracker'
    },
    {
      id: 'design-feedback',
      title: 'Design Feedback Matrix',
      description: 'Structured feedback collection and prioritization system for design reviews and stakeholder input.',
      price: '$15',
      rating: 4.6,
      downloads: '1.9k',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      tags: ['Feedback', 'Reviews', 'Collaboration'],
      link: 'https://docs.google.com/spreadsheets/d/design-feedback-matrix'
    }
  ]

  const figmaResources = [
    {
      id: 'auto-layout-master',
      title: 'Auto Layout Master Plugin',
      description: 'Advanced auto layout configurations and smart spacing system for consistent design patterns.',
      price: '$19',
      rating: 4.8,
      downloads: '12.5k',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop',
      tags: ['Plugin', 'Auto Layout', 'Spacing'],
      link: 'https://figma.com/community/plugin/auto-layout-master',
      type: 'Plugin'
    },
    {
      id: 'mobile-ui-kit',
      title: 'Modern Mobile UI Kit',
      description: 'Complete iOS and Android component library with 200+ screens and design system foundation.',
      price: '$49',
      rating: 4.9,
      downloads: '8.7k',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      tags: ['UI Kit', 'Mobile', 'Components'],
      link: 'https://figma.com/community/file/mobile-ui-kit',
      type: 'Template'
    },
    {
      id: 'wireframe-kit',
      title: 'Low-Fi Wireframe Kit',
      description: 'Rapid prototyping wireframe components for web and mobile with sketch-style aesthetics.',
      price: 'Free',
      rating: 4.7,
      downloads: '15.3k',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      tags: ['Wireframes', 'Prototyping', 'Low-Fi'],
      link: 'https://figma.com/community/file/wireframe-kit',
      type: 'Template'
    }
  ]

  const codepenProjects = [
    {
      id: 'css-animations',
      title: 'CSS Micro-Interactions',
      description: 'Collection of smooth CSS animations and micro-interactions for better user experience.',
      views: '45.2k',
      hearts: '1.8k',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      tags: ['CSS', 'Animations', 'Micro-interactions'],
      link: 'https://codepen.io/alexandra-chen/pen/css-animations'
    },
    {
      id: 'loading-states',
      title: 'Creative Loading States',
      description: 'Engaging loading animations and skeleton screens to improve perceived performance.',
      views: '32.1k',
      hearts: '2.3k',
      image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=300&fit=crop',
      tags: ['Loading', 'Animations', 'UX'],
      link: 'https://codepen.io/alexandra-chen/pen/loading-states'
    },
    {
      id: 'form-interactions',
      title: 'Smart Form Interactions',
      description: 'Enhanced form inputs with validation, progressive disclosure, and accessibility features.',
      views: '28.7k',
      hearts: '1.5k',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
      tags: ['Forms', 'Interaction', 'Accessibility'],
      link: 'https://codepen.io/alexandra-chen/pen/form-interactions'
    }
  ]

  const marketplaceServices = [
    {
      platform: 'Fiverr',
      title: 'Complete UX Design Service',
      description: 'End-to-end UX design including research, wireframing, prototyping, and testing.',
      price: 'Starting at $299',
      rating: 4.9,
      reviews: '127',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop',
      link: 'https://fiverr.com/alexandra_chen_ux',
      badge: 'Level 2 Seller'
    },
    {
      platform: 'Gumroad',
      title: 'UX Design Bundle Pack',
      description: 'Complete collection of templates, checklists, and resources for UX designers.',
      price: '$89',
      rating: 4.8,
      downloads: '3.4k',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
      link: 'https://gumroad.com/l/ux-design-bundle',
      badge: 'Best Seller'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const ResourceCard = ({ resource, type }: { resource: any, type: string }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setHoveredCard(resource.id)}
      onHoverEnd={() => setHoveredCard(null)}
      className="relative"
    >
      <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={resource.image}
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            className="absolute top-4 right-4"
            initial={{ scale: 0 }}
            animate={{ scale: hoveredCard === resource.id ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="sm" className="bg-white/90 text-black hover:bg-white">
              <ExternalLink size={16} />
            </Button>
          </motion.div>
          {resource.badge && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {resource.badge}
            </Badge>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              {resource.type && (
                <Badge variant="filled" className="mb-2">{resource.type}</Badge>
              )}
            </div>
            <div className="text-right">
              <p className="font-medium text-lg">{resource.price}</p>
              {resource.rating && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {resource.rating}
                </div>
              )}
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag: string) => (
                <Badge key={tag} variant="outlined" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                {resource.downloads && (
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloads}
                  </div>
                )}
                {resource.views && (
                  <div className="flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {resource.views}
                  </div>
                )}
                {resource.hearts && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {resource.hearts}
                  </div>
                )}
                {resource.reviews && (
                  <span>{resource.reviews} reviews</span>
                )}
              </div>
            </div>
            <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                View {type} <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Digital Resources & Templates
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Design Resources &<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover my collection of templates, plugins, and tools designed to accelerate your design workflow
            and enhance your creative process.
          </p>
        </motion.div>
      </section>

      {/* Resources Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="notion" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="notion" className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Notion</span>
              </TabsTrigger>
              <TabsTrigger value="sheets" className="flex items-center">
                <Table className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Sheets</span>
              </TabsTrigger>
              <TabsTrigger value="figma" className="flex items-center">
                <Figma className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Figma</span>
              </TabsTrigger>
              <TabsTrigger value="codepen" className="flex items-center">
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">CodePen</span>
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Services</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notion">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl mb-4">Notion Templates</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Professional templates to organize your design workflow, research, and project management in Notion.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {notionTemplates.map((template) => (
                    <ResourceCard key={template.id} resource={template} type="Template" />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="sheets">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl mb-4">Google Sheets Templates</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Data-driven spreadsheets for usability testing, feedback collection, and design analytics.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {googleSheets.map((sheet) => (
                    <ResourceCard key={sheet.id} resource={sheet} type="Spreadsheet" />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="figma">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl mb-4">Figma Resources</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Plugins, templates, and design systems to supercharge your Figma workflow.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {figmaResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} type={resource.type} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="codepen">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl mb-4">CodePen Projects</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Interactive code experiments and UI components you can use in your projects.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {codepenProjects.map((project) => (
                    <ResourceCard key={project.id} resource={project} type="Code" />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="marketplace">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl mb-4">Freelance Services</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Professional UX design services and curated design resources available on popular marketplaces.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {marketplaceServices.map((service, index) => (
                    <ResourceCard key={index} resource={service} type="Service" />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl mb-6">Need Something Custom?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Looking for a specific template or custom solution? Let's discuss your needs and create something perfect for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Request Custom Template
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:alexandra.chen@email.com">
                Bulk Licensing Inquiry
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}