import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card/card-shad"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Phone, Mail, MapPin, User, Building, MessageSquare } from "lucide-react"
import type { PageType } from '@/components/ui/navigation/types'
const linkedin = "https://www.linkedin.com/in/stapusoa"

interface ContactProps {
  onNavigate: (page: PageType) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="h-full pt-40 bg-neutral-50 py-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 text-balance">Let's Get In Touch</h1>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white" color="neutral">
            <div className="p-0 w-full z-30 flex flex-col items-center justify-center" onClick={() => window.open(linkedin, "_blank")}>
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-5 h-5 text-neutral-600" />
              </div>
              <p className="text-neutral-600 text-center w-full">LinkedIn</p>
            </div>
          </Card>

          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white">
            <div className="p-0 w-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-neutral-600" />
              </div>
              <p className="text-neutral-600 text-center w-full">sara.tapusoa@gmail.com</p>
            </div>
          </Card>

          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white">
            <div className="p-0 w-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-neutral-600" />
              </div>
              <p className="text-neutral-600 text-center w-full">UT, United States</p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8 text-center">
            Or fill out the form below
          </h2>

          <form className="space-y-6">
            {/* First Row - Dropdowns */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inquiry-purpose" className="text-sm font-medium text-neutral-700">
                  Inquiry Purpose*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-neutral-50 border-0">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-neutral-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-neutral-700">
                  Description that fits you*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-neutral-50 border-0">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-neutral-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="small-business">Small Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                                        <SelectItem value="recruiter">Recruiter</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row - Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full-name" className="text-sm font-medium text-neutral-700">
                  Full Name
                </Label>
                <div className="relative flex items-center">
                  <Input
                    id="full-name"
                    placeholder="Enter your full name..."
                    className="py-1 border-0"
                    variant="filled"
                    color="neutral"
                    startIcon={<User size={16} />}
                    fullWidth
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Email Address
                </Label>
                <div className="relative flex items-center">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address..."
                    className="py-1 border-0"
                    variant="filled"
                    color="neutral"
                    startIcon={<Mail size={16} />}
                    fullWidth />
                </div>
              </div>
            </div>

            {/* Third Row - Organization and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-medium text-neutral-700">
                  Organization
                </Label>
                <div className="relative flex items-center">
                  <Input
                    id="organization"
                    placeholder="Enter your organization..."
                    className="py-1 border-0"
                    variant="filled"
                    color="neutral"
                    startIcon={<Building size={16} />}
                    fullWidth />
                </div>
              </div>

              <div className="space-y-2 w-full">
                <Label htmlFor="phone" className="text-sm font-medium text-neutral-700">
                  Phone Number
                </Label>
                <div className="relative w-full flex items-center">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    className="py-1 border-0 w-full"
                    variant="filled"
                    color="neutral"
                    startIcon={<Phone size={16} />}
                    fullWidth />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-neutral-700">
                Message*
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  className="pt-3 min-h-32 bg-neutral-50 border-0 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button onClick={() => onNavigate('home')}
                type="submit"
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3 h-auto font-medium"
              >
                Submit Form →
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
