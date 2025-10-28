import { Card } from '@/components/ui/card/card-shad'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { BookOpen, Gamepad2, MapPin, RectangleGoggles, Camera, Music } from 'lucide-react'
import type { PageType } from '@/components/ui/navigation/types'
import headshot from '@/assets/images/profile.jpg'

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export function About({ onNavigate }: AboutPageProps) {
  const experience = [
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: 'June 2025 - Present',
      description: 'Designed and developed responsive websites for clients in real estate, chiropractic, massage therapy, and other service-based industries. Focused on improving user flows, enhancing site architecture, and optimizing both frontend and backend functionality to deliver efficient, user-centered digital experiences.'
    },
    {
      company: 'Travelpass',
      role: 'UX Engineer, Design Systems',
      period: '2022 - 2025',
      description: 'Created and maintained design systems across 6 products, managing 500+ components per product and contributing to component libraries in Storybook. Supported native app and web features from ideation through development, collaborating across design, engineering, and product ops. Contributed to user research, UX audits, and strategic planning to refine user flows and improve consistency.'
    },
    {
      company: 'Fishbowl',
      role: 'UX Designer',
      period: '2020 - 2022',
      description: 'Introduced design sprints and supported the UX team’s formation within engineering. Designed Android/iOS apps, web and desktop apps for inventory management across 4 major projects. Built a design system with 436 components, including style guides, prototypes, and developer-ready assets.'
    }
  ]

  const education = [
    {
      degree: 'Google UX Design Professional Certificate',
      school: 'Google/Coursera',
      year: '2023'
    },
    {
      degree: 'Bachelor of Science in Graphic Design and Speech Communication',
      school: 'Utah Valley University',
      year: '2019'
    }
  ]

  const skills = [
    'User Research', 'Usability Testing', 'Information Architecture', 'Wireframing',
    'Prototyping', 'Visual Design', 'Design Systems', 'Figma', 'Sketch', 'Webflow', 'Adobe Creative Suite',
    'HTML/CSS', 'React', 'Data Analysis', 'A/B Testing'
  ]

  const interests = [
    { icon: Camera, label: 'Photography' },
    { icon: Music, label: 'Ukulele' },
    { icon: RectangleGoggles, label: 'Playing VR' },
    { icon: Gamepad2, label: 'PC Gaming' }
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="grid grid-cols-4 gap-12 mb-16">
          <h1 className="col-span-4 row-span-1 lg:col-span-2 text-4xl sm:text-5xl mb-6">About Me</h1>
          <div className="col-span-2 row-span-3 lg:col-span-2">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src={headshot}
                alt="Sara Tapusoa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 w-full flex items-center space-y-2">
              <div className="flex w-full items-center justify-center text-muted-foreground">
                <MapPin className="mr-2" size={16} />
                Utah, USA
              </div>
            </div>
          </div>
          <p className="col-span-2 row-span-1 space-y-6 text-muted-foreground leading-relaxed">
            Hi, I’m Sara Tapusoa, a multidisciplinary UX designer with 6+ years of experience creating user-centered products across industries such as travel, inventory management, and wellness. I specialize in design systems, strategic planning, and delivering experiences that balance user needs with business goals.
          </p>
          <p className="col-span-2 row-span-1 space-y-6 text-muted-foreground leading-relaxed">
            My design approach is rooted in empathy and research. I focus on understanding users, business objectives, and technical constraints to craft solutions that are both effective and delightful. I enjoy developing processes that combine rigorous research with creative problem-solving.
          </p>
          <p className="col-span-4 row-span-1 space-y-6 text-muted-foreground leading-relaxed">
            I’m proficient in Figma, its API, design systems, documentation, automations, and more — skills I not only use professionally but enjoy exploring for fun. When I’m not designing or coding, you’ll likely find me playing video games, practicing piano, or spending time with my little family. I’m also passionate about mentoring aspiring designers and frequently speak at design meetups and conferences.
          </p>
          
        </div>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 flex items-center">
            <BookOpen className="mr-3" size={24} />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3>{job.role}</h3>
                  <Badge variant="outlined">{job.period}</Badge>
                </div>
                <h4 className="text-muted-foreground mb-3">{job.company}</h4>
                <p className="text-muted-foreground">{job.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-3xl mb-8">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <Badge variant="outlined" className="mt-2">{edu.year}</Badge>
                </Card>
              ))}
            </div>
          </section>
{/*}
          <section>
            <h2 className="text-3xl mb-8 flex items-center">
              <Award className="mr-3" size={24} />
              Recognition
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-6">
                  <p>{award}</p>
                </Card>
              ))}
            </div>
          </section>
          */}

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outlined" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
        </div>

        {/* Personal Interests */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">When I'm Not Designing</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="p-6 text-center">
                <interest.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p>{interest.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t">
          <h3 className="text-2xl mb-4">Let's work together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and meaningful projects.
            Whether you need help with a specific challenge or want to explore a collaboration, I'd love to hear from you.
          </p>
          <Button size="lg" onClick={() => onNavigate('contact')}>
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}