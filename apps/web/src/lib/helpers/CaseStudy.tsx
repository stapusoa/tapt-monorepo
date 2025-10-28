import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { caseStudies } from '@/lib/data/caseStudies'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card/card-shad'
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Palette, Code, Copy, Check } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Icon } from '@/components/ui/Icon'
// import { Image } from '@/components/ui/image';
import type { CaseStudyProps } from '@/lib/types'
import { PhaseCard } from './cards/ExpandCard'

export function CaseStudy({ onNavigate }: CaseStudyProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = caseStudies.find((p: typeof caseStudies[number]) => p.id === id)

  if (!project) return <p>Project not found</p>

  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleNextProject = () => {
    const currentIndex = caseStudies.findIndex((p) => p.id === project.id)
    const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length]
    navigate(`/work/${nextProject.id}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackToProjects = () => {
    navigate("/work")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  const renderDesignSystemTab = (project: typeof caseStudies[0]) => {
    if (!project.designSystem) return null

    return (
      <TabsContent value="design-system" className="mt-8">
        <div className="space-y-12">
          {/* Design Tokens Section */}
          <div>
            <h2 className="text-3xl mb-2">Design Tokens</h2>
            <p className="text-muted-foreground mb-8">
              Core design decisions codified as reusable tokens for consistency across the product.
            </p>
            <Button variant="ghost" color="primary" className="pb-4" onClick={() => window.open(project.designSystemLink, "_blank")}
            >
              <span>View Full Design System</span><Icon name="arrowRight" /></Button>

            {/* Color System */}
            <div className="mb-12">
              <h3 className="mb-4 flex items-center">
                <Palette className="mr-2" size={20} />
                Color Palette
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.designSystem.colors.map((color, index) => (
                  <Card key={index} className="p-4">
                    <div
                      className="w-full h-20 rounded-lg mb-3 border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm">{color.name}</h4>
                        <code className="text-xs bg-muted px-2 py-1 rounded">{color.hex}</code>
                      </div>
                      <p className="text-xs text-muted-foreground">{color.usage}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Typography System */}
            <div className="mb-12">
              <h3 className="mb-4 flex items-center">
                <Code className="mr-2" size={20} />
                Typography Scale
              </h3>
              <div className="space-y-4">
                {project.designSystem.typography.map((type, index) => (
                  <Card key={index} className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-1">
                        <h4 className="text-sm mb-2">{type.name}</h4>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div>Size: <code className="bg-muted px-1.5 py-0.5 rounded">{type.size}</code></div>
                          <div>Weight: <code className="bg-muted px-1.5 py-0.5 rounded">{type.weight}</code></div>
                          <div>Line height: <code className="bg-muted px-1.5 py-0.5 rounded">{type.lineHeight}</code></div>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <div
                          className="mb-2"
                          style={{
                            fontSize: type.size,
                            fontWeight: type.weight,
                            lineHeight: type.lineHeight
                          }}
                        >
                          The quick brown fox jumps over the lazy dog
                        </div>
                        <p className="text-xs text-muted-foreground">{type.usage}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Spacing System (if available) */}
            {project.designSystem.spacing && (
              <div className="mb-12">
                <h3 className="mb-4">Spacing System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.designSystem.spacing.map((space, index) => (
                    <Card key={index} className="p-4">
                      <div className="mb-3">
                        <div className="bg-primary h-8" style={{ width: space.value }} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm">{space.name}</h4>
                          <code className="text-xs bg-muted px-2 py-1 rounded">{space.value}</code>
                        </div>
                        <p className="text-xs text-muted-foreground">{space.usage}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Component Library Section */}
          <div>
            <h2 className="text-3xl mb-2">Component Library</h2>
            <p className="text-muted-foreground mb-8">
              Reusable components with comprehensive documentation and code examples.
            </p>

            <div className="space-y-8">
              {project.designSystem.components.map((component, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-6">
                    {/* Component Header */}
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl">{component.name}</h3>
                        <Badge variant="outlined">{project.category}</Badge>
                      </div>
                      <p className="text-muted-foreground">{component.description}</p>
                    </div>

                    {/* Variants */}
                    <div>
                      <h4 className="text-sm mb-3">Variants</h4>
                      <div className="flex flex-wrap gap-2">
                        {component.variants.map((variant, vIndex) => (
                          <Badge key={vIndex} variant="filled" color="neutral">{variant}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* States (if available) */}
                    {component.states && (
                      <div>
                        <h4 className="text-sm mb-3">States</h4>
                        <div className="flex flex-wrap gap-2">
                          {component.states.map((state, sIndex) => (
                            <Badge key={sIndex} variant="outlined">{state}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sizes (if available) */}
                    {component.sizes && (
                      <div>
                        <h4 className="text-sm mb-3">Sizes</h4>
                        <div className="flex flex-wrap gap-2">
                          {component.sizes.map((size, sizeIndex) => (
                            <Badge key={sizeIndex} variant="outlined">{size}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features (if available) */}
                    {component.features && (
                      <div>
                        <h4 className="text-sm mb-3">Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {component.features.map((feature, fIndex) => (
                            <Badge key={fIndex} variant="outlined">{feature}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Props/API */}
                    <div>
                      <h4 className="text-sm mb-3">Props / API</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="border-b">
                            <tr>
                              <th className="text-left py-2 px-3">Prop</th>
                              <th className="text-left py-2 px-3">Type</th>
                              <th className="text-left py-2 px-3">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {component.props.map((prop, pIndex) => (
                              <tr key={pIndex} className="border-b last:border-0">
                                <td className="py-2 px-3">
                                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                                    {prop.name}
                                  </code>
                                </td>
                                <td className="py-2 px-3">
                                  <code className="text-xs text-muted-foreground">
                                    {prop.type}
                                  </code>
                                </td>
                                <td className="py-2 px-3 text-muted-foreground">
                                  {prop.description}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Code Example (if available) */}
                    {component.code && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm">Code Example</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(component.code!, `${component.name}-${index}`)}
                            className="h-8"
                          >
                            {copiedCode === `${component.name}-${index}` ? (
                              <>
                                <Check className="mr-2" size={14} />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="mr-2" size={14} />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                          <code>{component.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>
    )
  }


  return (
    <div className="relative w-full h-screen">
      <img alt={project.title} src={project.image} className="fixed inset-0 w-full h-full object-cover object-top-right hidden lg:block z-0"></img>
      <div className="relative isolate pt-20 h-screen">
        <div className="left mx-auto max-w-300 px-6 sm:px-6 md:px-14 lg:px-32 py-28 sm:py-36 lg:pt-58 lg:pb-20">
          <div className="text-left">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={handleBackToProjects}
              className="mb-8 p-0 h-auto"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Button>

            {/* Project Header */}
            <div className="mb-12 typography">
              <Badge variant="filled" color="neutral" className="mb-4">{project.category}</Badge>
              <h1 className="title-md text-primary font-thin lowercase">{project.title}</h1>
              <h2 className="title-2xl text-blueberry-900 font-bold lowercase mb-8">{project.subtitle}</h2>
              <div className="flex items-left justify-left gap-x-4">
                <Button className="" variant="filled" color="secondary" size="lg" onClick={() => window.open(project.prototype, "_blank")}>
                  View prototype
                </Button>
                <Button className="" variant="outlined" color="secondary" size="lg" onClick={handleNextProject}>
                  Next case study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full z-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-14 lg:px-32 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div>
              <h4 className="mb-2">Duration</h4>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div>
              <h4 className="mb-2">Team</h4>
              <p className="text-muted-foreground">{project.team}</p>
            </div>
            <div>
              <h4 className="mb-2">My Role</h4>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
          </div>

          {/* Project Content */}
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className={`grid w-full ${project.designSystem ? 'grid-cols-4' : 'grid-cols-3'}`}>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              {project.designSystem && (
                <TabsTrigger value="design-system">Design System</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="overview" className="space-y-8 mt-8">
              <div>
                <h3 className="mb-4 flex items-center">
                  <Target className="mr-2" size={20} />
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="mb-4 flex items-center">
                  <Lightbulb className="mr-2" size={20} />
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                {project.process.map((phase, index) => (
                  <PhaseCard
                    key={index}
                    phaseNumber={index + 1}
                    title={phase.phase}
                    description={phase.description}
                  >
                    {/* This is the content that appears when the card expands */}
                    <div>
                      <strong className="text-sm">Key Deliverables:</strong>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                        {phase.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        {phase.children}
                      </div>
                      {/* Optional nested pages/sections */}
                      {phase.pages?.map((page, pageIndex) => (
                        <div key={pageIndex} className="col-start-1 col-span-8 border border-gray-200 bg-white overflow-hidden rounded-2 p-6 mt-4">
                          <span className="flex items-center justify-center bg-green text-white font-medium rounded-md px-3 py-2 mb-2">
                            {page.page}
                          </span>
                          <ul>
                            {page.sections.map((section, sectionIndex) => (
                              <li key={sectionIndex} className="mb-2">
                                <strong>{section.section}</strong>
                                <ul className="ml-4 list-disc">
                                  {section.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </PhaseCard>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="impact" className="mt-8">
              <div>
                <h3 className="mb-6 flex items-center">
                  <TrendingUp className="mr-2" size={20} />
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.impact.map((result, index) => (
                    <Card key={index} className="p-4">
                      <p className="text-center">{result}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Design System Tab */}
            {project.designSystem && renderDesignSystemTab(project)}
          </Tabs>

          {/* Navigation */}
          <div className="flex justify-between pt-8 border-t">
            <Button variant="outlined"               onClick={handleBackToProjects}

            >
              <ArrowLeft className="mr-2" size={16} />
              All Projects
            </Button>
            <Button onClick={() => onNavigate('contact')}>
              Let's Discuss This Project
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


