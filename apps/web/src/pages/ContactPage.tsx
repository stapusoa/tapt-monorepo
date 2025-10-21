import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, User, Building, MessageSquare } from "lucide-react"
import { Icon } from "@/components/ui/Icon"

export function ContactPage() {
  return (
    <div className="min-h-screen mt-50 bg-gray-50 py-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">Let's Get In Touch</h1>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white" variant="outlined" color="neutral">
            <CardContent className="p-0 w-full" alignH="center" alignV="center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-gray-600 text-center w-full">(801) 400-9242</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white">
            <CardContent className="p-0 w-full" alignH="center" alignV="center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-gray-600 text-center w-full">plantingrootsrealty@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 rounded-md border-1 border-neutral-300 bg-white">
            <CardContent className="p-0 w-full" alignH="center" alignV="center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-gray-600 text-center w-full">Lehi, UT, United States</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Or fill out the form below
          </h2>

          <form className="space-y-6">
            {/* First Row - Dropdowns */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="inquiry-purpose" className="text-sm font-medium text-gray-700">
                  Inquiry Purpose*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-gray-50 border-0">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description that fits you*
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-12 bg-gray-50 border-0">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <SelectValue placeholder="Choose one option..." />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="small-business">Small Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row - Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <div className="relative flex items-center">
                  <Icon
                    name="user"
                    size="md"
                    className="absolute z-30 left-3 transform text-gray-500" />
                  <Input
                    id="full-name"
                    placeholder="Enter your full name..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative flex items-center">
                  <Icon
                    name="email"
                    size="md"
                    className="absolute z-30 left-3 transform text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>
            </div>

            {/* Third Row - Organization and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                  Organization
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="organization"
                    placeholder="Enter your organization..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <div className="relative">
                  <Icon
                    name="phone"
                    size="md"
                    className="absolute z-30 left-3 transform text-gray-500" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    className="pl-10 h-12 bg-gray-50 border-0"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message*
              </Label>
              <div className="relative">
                <Icon
                  name="user"
                  size="md"
                  className="absolute z-30 left-3 transform text-gray-500" />
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  className="pl-10 pt-3 min-h-32 bg-gray-50 border-0 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
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
