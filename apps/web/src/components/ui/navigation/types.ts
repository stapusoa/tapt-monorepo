import React from "react"
import type { AvailableIcons } from '@/components/ui/Icon'

export type PageType =
  | 'home'
  | 'our-story'
  | 'featured'
  | 'shop'
  | 'services'
  | 'product-details'
  | 'blog'
  | 'contact'
  | 'shop'
  | 'sell'
  | 'creators'
  | 'cart'
  | 'checkout'
  | 'account'
  | 'dashboard'
  | 'settings'
  | 'help'
  | 'youth-stands'
  | 'branding'
  | 'profile'
  | 'search'
  | 'privacy'
  | 'terms'
  | 'policies';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  heroHeight?: number;
  onLogoClick: () => void;
  onShopClick: () => void;
  onSellClick: () => void;
  onCartClick: () => void;
  cartItemCount: number;
}

export interface Socials {
  platform: string;
  href: string;
  icon: AvailableIcons;
}

export interface FooterProps {
  socials?: Socials[];
  links?: { text: string; page: PageType }[];
  logo: React.ReactNode;
  name?: string;
  email?: string;
  phone?: string;
  licensing?: string;
  copyright?: number | string;
  privacy?: string;
  terms?: string;
  policy?: string;
}
