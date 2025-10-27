import {
  LoadingIcon,
  PhoneIcon,
  PhoneOutlinedIcon,
  MenuIcon,
  CloseIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  UserIcon,
  EmailIcon,
  ShoppingCartIcon,
  SearchIcon,
  ArrowRightIcon
} from '../icons'

export const IconMapping = {
  loading: <LoadingIcon />,
  phone: <PhoneIcon />,
  phoneOutlined: <PhoneOutlinedIcon />,
  menu: <MenuIcon />,
  close: <CloseIcon />,
  linkedin: <LinkedinIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  user: <UserIcon />,
  email: <EmailIcon />,
  shoppingCart: <ShoppingCartIcon />,
  search: <SearchIcon />,
  arrowRight: <ArrowRightIcon />,
} as const

export type AvailableIcons = keyof typeof IconMapping
