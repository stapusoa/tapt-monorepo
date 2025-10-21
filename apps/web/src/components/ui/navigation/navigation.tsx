'use client'

import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui'
import { navitems, type NavigationProps, BREAKPOINTS } from '@/components/ui/navigation'
import { MenuPopup } from '@/components/ui/menu'

function useViewport(heroHeight: number) {
  const [width, setWidth] = useState(() => window.innerWidth)
  const [scrolled, setScrolled] = useState(() => window.scrollY > heroHeight)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    const handleScroll = () => setScrolled(window.scrollY > heroHeight)

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [heroHeight])

  return { width, scrolled }
}

export function Navigation({
  onLogoClick,
  onShopClick,
  onSellClick,
  onCartClick,
  cartItemCount = 0,
  onNavigate,
  heroHeight = 600,
}: NavigationProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const { width, scrolled } = useViewport(heroHeight)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const userButtonRef = useRef<HTMLButtonElement>(null)

  const logowhite = '/logo/logo-contrast.svg'
  const logoprimary = '/logo/logo-alt.svg'

  // Simulated signed-in state for demonstration; replace with actual auth state
  const signedIn = true

  // prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileMenuOpen)
  }, [mobileMenuOpen])

  // determine how many nav links to show
  const visibleLinkCount =
    width >= BREAKPOINTS['3xl']
      ? 4
      : width >= BREAKPOINTS['2xl']
        ? 3
        : width >= BREAKPOINTS.xl
          ? 2
          : width >= BREAKPOINTS.lg
            ? 1
            : 0

  const showSeller = width >= BREAKPOINTS.lg

  const isActiveLink = (page: string) =>
    (location.pathname === '/' && page === 'home') ||
    (page !== 'home' && location.pathname.includes(page))

  const handleLinkClick = (page: string) => {
    onNavigate?.(page as any)
    if (page === 'home') onLogoClick?.()
    if (page === 'shop') onShopClick?.()
    if (page === 'sell') onSellClick?.()
    setMobileMenuOpen(false)
  }

  // Compute hidden nav items for current breakpoint
  const hiddenNavItems = navitems.slice(visibleLinkCount)

  // Compose menu items for popup
  const popupMenuItems = [
    ...hiddenNavItems,
    ...(signedIn
      ? [
        { page: 'profile', text: 'Profile' },
        { page: 'settings', text: 'Settings' },
        { page: 'about', text: 'About' },
      ]
      : [
        { page: 'signin', text: 'Sign in / Sign up' },
        { page: 'settings', text: 'Settings' },
        { page: 'about', text: 'About' },
      ]),
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-500 backdrop-blur-md',
          isHomePage
            ? scrolled
              ? 'bg-primary-95 shadow-xl'
              : 'bg-transparent'
            : 'bg-white shadow-md'
        )}
      >
        <div
          className={cn(
            'max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4',
            visibleLinkCount === 1 && 'justify-start'
          )}
        >
          {/* 🔷 Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick('home')}
            className="flex items-center h-full transition-transform hover:scale-105"
          >
            <img
              src={isHomePage && !scrolled ? logowhite : logoprimary}
              alt="Koya Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* 🔶 Links */}
          {visibleLinkCount > 0 && (
            <ul
              className={cn(
                'hidden md:flex gap-6 items-center flex-1',
                visibleLinkCount === 1
                  ? 'ml-6' // align next to logo
                  : 'justify-center'
              )}
            >
              {navitems.slice(0, visibleLinkCount).map((item) => (
                <li key={item.page} className="group relative">
                  <Link
                    to={item.page === 'home' ? '/' : `/${item.page}`}
                    onClick={() => handleLinkClick(item.page)}
                    className={cn(
                      'px-3 py-2 font-semibold transition-colors',
                      isHomePage && !scrolled
                        ? 'text-white hover:text-white/80'
                        : 'text-default hover:text-secondary-light'
                    )}
                  >
                    {item.text}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
                        isActiveLink(item.page) && 'scale-x-100',
                        isHomePage && !scrolled ? 'bg-white' : 'bg-primary'
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* 🟣 Action Buttons */}
          <div className="flex items-center gap-3 ml-auto relative">
            {showSeller && (
              <button
                onClick={onSellClick}
                className={cn(
                  'hidden lg:block px-6 py-3 rounded-lg font-semibold text-[15px] uppercase transition-opacity',
                  isHomePage && !scrolled
                    ? 'text-white hover:opacity-90'
                    : 'text-default hover:text-secondary-light'
                )}
              >
                Become a Seller
              </button>
            )}

            {/* Search (md+) */}
            {width >= BREAKPOINTS.md && (
              <IconButton
                name="search"
                expandable
                isHero={isHomePage && !scrolled}
                isScrolled={scrolled}
                expandedContent={
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-2 rounded-md border border-stone-300 focus:outline-none text-sm"
                  />
                }
              />
            )}

            {/* Cart + User/Menu (always visible) */}
            <IconButton
              name="shoppingCart"
              count={cartItemCount}
              onClick={onCartClick}
              isHero={isHomePage && !scrolled}
              isScrolled={scrolled}
            />
            <IconButton
              name={mobileMenuOpen ? 'close' : 'user'}
              onClick={() => setMobileMenuOpen((o) => !o)}
              isHero={isHomePage && !scrolled}
              isScrolled={scrolled}
            />
            {/* Popup menu anchored to user icon */}
            <div
              className={cn(
                'absolute right-0 mt-2 w-48 bg-primary-95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden transform transition-all duration-300 origin-top-right',
                mobileMenuOpen
                  ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
                  : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
              )}
              style={{ top: '100%' }}
            >
              <ul className="flex flex-col">
                {popupMenuItems.map((item) => (
                  <li key={item.page}>
                    <Link
                      to={item.page === 'home' ? '/' : item.page === 'signin' ? '/signin' : `/${item.page}`}
                      onClick={() => {
                        handleLinkClick(item.page)
                        setMobileMenuOpen(false)
                      }}
                      className="block px-4 py-2 text-white hover:bg-white/10 transition"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}