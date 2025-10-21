import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuPopupProps {
  isOpen: boolean
  links: { label: string; page: string }[]
  onNavigate: (page: string) => void
}

export const MenuPopup: React.FC<MenuPopupProps> = ({ isOpen, links, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute right-4 top-16 z-50 w-56 rounded-2xl bg-white shadow-lg ring-1 ring-black/10',
            'p-3 flex flex-col space-y-2 text-center sm:hidden'
          )}
        >
          {links.map((item) => (
            <Link
              key={item.page}
              to={item.page === 'home' ? '/' : `/${item.page}`}
              onClick={() => onNavigate(item.page)}
              className={cn(
                'block w-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100'
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}