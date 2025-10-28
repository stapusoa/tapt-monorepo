import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card-shad'
import { Badge } from '@/components/ui/badge/badge-shad'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import { DialogTrigger } from '@/components/ui/dialog';

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, Clock, Users, Zap, ArrowRight, Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import type { PageType } from '@/components/ui/navigation/types'

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export function Services({ onNavigate }: ServicesPageProps) {
  // const [selectedTier, setSelectedTier] = useState('essential');
  const [selectedProjectType, setSelectedProjectType] = useState('all')
  const [showBooking, setShowBooking] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState('')

  const pricingTiers = [
    {
      id: 'essential',
      name: 'Essential',
      tagline: 'Perfect for startups & small projects',
      price: '$2,500',
      billing: 'Flat rate per project',
      description: 'Design and develop a professional, user-friendly product from concept to launch.',
      features: [
        'Discovery session & project brief',
        'User research & persona creation',
        'Wireframes & user flows',
        'High-fidelity UI design',
        'Basic prototype',
        'Responsive front-end development',
        'Basic SEO & back-end development setup',
        '2 rounds of revisions',
        '6-8 week delivery',
      ],
      ideal: ['Landing pages', 'Simple mobile apps', 'MVP designs', 'Small websites'],
      cta: 'Start Essential Project'
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'For companies with complex needs',
      price: '$75',
      billing: 'Per hour',
      description: 'Full product design and development support with deeper research, prototyping, and testing.',
      features: [
        'Advanced UX research & analysis',
        'Competitive analysis',
        'Information architecture',
        'Advanced prototyping',
        'Usability testing',
        'Design system documentation',
        'Full component libraries',
        'Unlimited revisions',
        'CMS integration (Sanity, WordPress, etc.)',
        'Ongoing QA & refinement',
      ],
      ideal: ['E-commerce platforms', 'SaaS applications', 'Enterprise software', 'Complex web apps'],
      cta: 'Book Professional Hours',
      popular: true
    },
    {
      id: 'partnership',
      name: 'Partnership',
      tagline: 'Long-term collaboration for big products',
      price: '$800',
      billing: 'Per month',
      description: 'A dedicated design & development partner offering strategy, updates, and ongoing support.',
      features: [
        'Priority monthly design & development hours',
        'Dedicated Slack/Teams communication',
        'Design system maintenance & expansion',
        'Continuous UX testing & optimization',
        'Landing page or feature launches',
        'Collaboration with marketing or dev teams',
        'Monthly strategy & performance reviews',
        'Custom analytics reports (optional)',
      ],
      ideal: ['Growing startups', 'Product teams', 'Multiple projects', 'Design system needs'],
      cta: 'Start Partnership'
    }
  ]

  const projectTypes = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'branding', name: 'Branding & Identity', count: 3 },
    { id: 'website', name: 'Website Design', count: 4 },
    { id: 'mobile', name: 'Mobile App', count: 2 },
    { id: 'saas', name: 'SaaS Platform', count: 2 },
    { id: 'ecommerce', name: 'E-commerce', count: 1 }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const BookingDialog = () => (
    <Dialog open={showBooking} onOpenChange={setShowBooking}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Book a Discovery Call</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 flex flex-col">
          <div className="space-x-4 flex">
            <div className="w-1/2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outlined" className="w-full justify-start text-left">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-1/2">
              <Label>Select Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" type="name" placeholder="Full name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name" />
            </div>
            <div>
              <Label htmlFor="project">Project Brief</Label>
              <Textarea id="project" placeholder="Tell me about your project..." rows={3} />
            </div>
          </div>

          <Button className="w-full btn-primary" disabled={!selectedDate || !selectedTime}>
            Book Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )

  const QuoteDialog = () => (
    <Dialog open={showQuote} onOpenChange={setShowQuote}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Request Custom Quote</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quote-name">Name</Label>
              <Input id="quote-name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="quote-email">Email</Label>
              <Input id="quote-email" type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div>
            <Label htmlFor="quote-company">Company</Label>
            <Input id="quote-company" placeholder="Company name" />
          </div>

          <div>
            <Label htmlFor="quote-type">Project Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="branding">Branding & Identity</SelectItem>
                <SelectItem value="website">Website Design</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="saas">SaaS Platform</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quote-timeline">Timeline</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Project timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="2-3-months">2-3 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quote-budget">Budget Range</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-5k">Under $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                <SelectItem value="30k-plus">$30,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quote-details">Project Details</Label>
            <Textarea
              id="quote-details"
              placeholder="Describe your project, goals, and any specific requirements..."
              rows={4}
            />
          </div>

          <Button className="w-full btn-brand">
            Request Quote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Design Services &<br />
            <span className="text-primary">Pricing</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transparent pricing for every project size. From quick fixes to long-term partnerships.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => setShowBooking(true)}
            >
              Book Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outlined"
              onClick={() => setShowQuote(true)}
            >
              Request Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">
              Every project is unique. Pick the approach that fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full relative ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                      Most Popular
                    </Badge>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground mb-4">{tier.tagline}</p>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">{tier.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.billing}</p>
                  </div>

                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Ideal for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tier.ideal.map((item, i) => (
                        <Badge key={i} variant="filled" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full mt-auto ${tier.popular ? 'btn-brand' : 'btn-primary'}`}
                    onClick={() => tier.id === 'professional' ? setShowBooking(true) : setShowQuote(true)}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Work by Type</h2>
            <p className="text-muted-foreground">
              Browse projects by category to see relevant examples of my work.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedProjectType === type.id ? 'filled' : 'outlined'}
                onClick={() => setSelectedProjectType(type.id)}
                className="rounded-full"
              >
                {type.name} ({type.count})
              </Button>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outlined"
              onClick={() => onNavigate('work')}
              className="inline-flex items-center"
            >
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Work Together</h2>
            <p className="text-muted-foreground">
              My proven process ensures we deliver exceptional results on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start with understanding your users, business goals, and technical constraints.',
                icon: Users
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Define the design strategy, information architecture, and user experience approach.',
                icon: Zap
              },
              {
                step: '03',
                title: 'Design',
                description: 'Create wireframes, prototypes, and high-fidelity designs with regular feedback loops.',
                icon: Clock
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Handoff designs with documentation and support through development.',
                icon: Check
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{item.step}</div>
                <h3 className="text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your needs and find the perfect approach for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-brand"
              onClick={() => setShowBooking(true)}
            >
              Book Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outlined"
              onClick={() => setShowQuote(true)}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <BookingDialog />
      <QuoteDialog />
    </div>
  )
}