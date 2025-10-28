import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card/card-shad"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Phone, Mail, MapPin, User, Building, MessageSquare } from "lucide-react"
import type { PageType } from '@/components/ui/navigation/types'
const linkedin = "https://www.linkedin.com/in/stapusoa"

interface ContactProps {
  onNavigate: (page: PageType) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryPurpose: "",
    organization: "",
    role: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, form)
      setSuccess("Form submitted successfully!")
      setForm({ name: "", email: "", inquiryPurpose: "", role: "", phone: "", organization: "", message: "" })
          onNavigate('home')

    } catch (err) {
      console.error(err)
      setError("Failed to submit the form. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            {success && <p className="text-teal-600">{success}</p>}
            {error && <p className="text-cherry-400">{error}</p>}

            {/* First Row - Dropdowns */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inquiry-purpose" className="text-sm font-medium text-neutral-700">
                  Inquiry Purpose*
                </Label>
                <Select
                  value={form.inquiryPurpose}
                  onValueChange={(val) => setForm({ ...form, inquiryPurpose: val })}>
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
                <Select
                  value={form.role}
                  onValueChange={(val) => setForm({ ...form, role: val })}>
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
                <Label htmlFor="name" className="text-sm font-medium text-neutral-700">
                  Full Name
                </Label>
                <div className="relative flex items-center">
                  <Input
                    id="name"
                    placeholder="Enter your full name..."
                    className="py-1 border-0"
                    variant="filled"
                    color="neutral"
                    value={form.name}

                    onChange={handleChange}
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
                    value={form.email}

                    onChange={handleChange}
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
                    value={form.organization}
                    onChange={handleChange}
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
                    value={form.phone}
                    onChange={handleChange}

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
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message here..."
                  className="pt-3 min-h-32 bg-neutral-50 border-0 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 h-auto font-medium"
              >
                {submitting ? "Submitting..." : "Submit Form →"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}




