import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator/separator"
import type { PageType } from "@/components/ui/navigation/types"

export function Footer({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <footer className="relative shrink-0 w-full bg-[#1a1a1a] text-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="typography">
                  <h3 className="title-sm mb-4">
                    Tapt Designs
                  </h3>
                  <p className="body-lg text-white/80 leading-relaxed">
                    A digital solutions expert with over 6 years of experience.
                  </p>
                </div>
                <div className="space-y-2 typography">
                  <p className="body-md font-semibold text-white mb-4">Sara Tapusoa</p>
                  <p className="body-sm text-white/80">User Experience Engineer</p>
                  <p className="body-sm text-white/80">Specializing in Design Systems</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 typography">
                <h4 className="body-lg leading-8">Quick Links</h4>
                <div className="space-y-4 body-sm">
                  {[
                    { text: 'Home', page: 'home' as PageType },
                    { text: 'Work', page: 'work' as PageType },
                    { text: 'Services', page: 'services' as PageType },
                    { text: 'Resources', page: 'resources' as PageType },
                    { text: 'Contact', page: 'contact' as PageType }
                  ].map((link, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate(link.page)}
                      className="block body-md text-white/80 hover:text-white transition-colors text-left"
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4 typography">
                <h4 className="body-lg leading-8">Services</h4>
                <div className="space-y-4 body-md">
                  {[
                    'Websites',
                    'Apps',
                    'Design Systems',
                    'Automations',
                    'Figma Plugins'
                  ].map((service, index) => (
                    <p key={index} className="body-md text-white/80">
                      {service}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 typography">
                <h4 className="body-lg leading-8">Get In Touch</h4>
                <div className="space-y-4 body-md">
                  <div className="flex items-center gap-3">
                    <span className="body-md">📱</span>
                    <a href="tel:+18018577095" className="body-md text-white/80 hover:text-white transition-colors">
                      By phone
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[20px]">📧</span>
                    <a href="mailto:plantingrootsrealty@gmail.com" className="body-md text-white/80 hover:text-white transition-colors">
                      sara.tapusoa@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="body-md">📍</span>
                    <span className="body-md text-white/80">
                      Utah County, UT
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 body-md">
                  <h5 className="text-white">Follow Me</h5>
                  <div className="flex gap-3">
                    {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((platform, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        size="sm"
                        className="border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
                      >
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-white/20 mb-8" />

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="body-xs text-white/60 text-[14px]">
                © 2025 Tapt Designs. All rights reserved.
              </div>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Equal Housing Opportunity'].map((label, index) => (
                  <button
                    key={index}
                    className="body-sm text-white/60 hover:text-white/80 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* License Info */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className=" text-white/60 body-xs text-center leading-relaxed">
                Sara Tapusoa - UX Design Engineer in Utah.
                All information deemed reliable but not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}