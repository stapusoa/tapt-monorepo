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
  SearchIcon
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
  search: <SearchIcon />
} as const

export type AvailableIcons = keyof typeof IconMapping
