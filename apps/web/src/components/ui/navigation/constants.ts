import type { PageType } from "./types"
import type { Socials } from "./types"

export const navitems: { text: string; page: PageType }[] = [
  { text: 'Work', page: 'work' },
  { text: 'Services', page: 'services' },
  { text: 'Resources', page: 'resources' },
]

export const PHONE_NUMBER = "(801) 857-7095"

export const defaultSocials: Socials[] = [
  { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
]

export const moreLinks: { text: string; page: PageType }[] = [
  { text: 'Privacy', page: 'privacy' },
  { text: 'Terms', page: 'terms' },
  { text: 'Policies', page: 'policies' },
]

export const companyName = "Tapt Designs"
export const copyrightYear = new Date().getFullYear()
