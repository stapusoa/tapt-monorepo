import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import { Label } from "@/components/ui/label/label"
import type { PageType } from "@/components/ui/navigation/types"
import { useState } from "react"
import { db } from "@/lib/firebase"   // adjust path to your firebase.ts
import { collection, addDoc, Timestamp } from "firebase/firestore"

export function QuickContactSection({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    try {
      await addDoc(collection(db, "appointments"), {
        ...form,
        createdAt: Timestamp.now(),
      })
      setSuccess(true)
      setForm({ name: "", phone: "", email: "", message: "" }) // reset
    } catch (err) {
      console.error("Error saving message:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative shrink-0 w-full bg-gradient-to-r from-[#5e4684] to-[#7a5ba8]">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white space-y-6">
                <h2 className="font-['Merriweather:Bold',_sans-serif] text-[42px] font-bold leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="font-['Karla:Regular',_sans-serif] text-white/90 text-[18px] leading-relaxed">
                  Whether you're buying, selling, or investing, I'm here to help you achieve your real estate goals. Let's connect today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3 rounded-xl"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outlined"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl"
                  >
                    Call (801) 400-9242
                  </Button>
                </div>
              </div>

              {/* Quick Contact Form */}
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-['Merriweather:Bold',_sans-serif] text-[24px]">Quick Contact</CardTitle>
                  <CardDescription>
                    Get a response within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quickName" className="text-sm font-medium">Name</Label>
                      <Input
                        id="quickName"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"

                        className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quickPhone" className="text-sm font-medium">Phone</Label>
                      <Input
                        id="quickPhone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(801) 555-0123"
                        className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quickEmail" className="text-sm font-medium">Email</Label>
                    <Input
                      id="quickEmail"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      type="email"
                      placeholder="your@email.com"
                      className="h-10 rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quickMessage" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="quickMessage"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can I help you?"
                      className="rounded-lg border-gray-200 focus:border-[#5e4684] focus:ring-[#5e4684] resize-none"
                      rows={3}
                    />
                  </div>
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] hover:from-[#4a3570] hover:to-[#65487c] text-white rounded-lg font-semibold"
                  >
                    {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}