import type { ButtonSize, ButtonColor, ButtonVariant, IconButtonSize } from './constants'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  as?: React.ElementType;
  loading?: boolean;
  linkStyle?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  size?: IconButtonSize
  count?: number
  expandable?: boolean
  expandedContent?: React.ReactNode
  isMenuButton?: boolean
  isSearchButton?: boolean
  isHero?: boolean
  isScrolled?: boolean
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}