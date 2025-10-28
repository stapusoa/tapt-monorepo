import React, { useState } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Work } from "./pages/Work"
import { Services } from "./pages/Services"
import { Resources } from "./pages/Resources"
import { Contact } from "./pages/ContactPage"
import { SanityPage } from "@/lib/cms/components/PageLayout"
import { Navigation } from "@/components/ui/navigation"
import { CaseStudy } from '@/lib/helpers/CaseStudy'
import { About } from './pages/About'
import type { PageType } from "@/components/ui/navigation/types"
import type { Product, ProductWithQuantity } from "@/lib/types"
import { CartDrawer } from '@/lib/helpers/CartDrawer'
import { withLDProvider } from "launchdarkly-react-client-sdk"
import { Footer } from '@/components/ui/navigation/footer'
import "./index.css"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [cartItems, setCartItems] = useState<ProductWithQuantity[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
    if (page === "home") navigate("/")
    else navigate(`/${page}`)
  }

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogoClick={() => handleNavigate('home')}
        onShopClick={() => handleNavigate('shop')}
        onSellClick={() => handleNavigate('sell')}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={totalCartItems}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart} // ✅ pass add-to-cart handler
            />
          }
        />
        <Route
          path="/work"
          element={
            <Work
              onNavigate={(id) => navigate(`/work/${id}`)}
            />
          }
        />
        <Route path="/work/:id" element=
          {
            <CaseStudy onNavigate={(page) => navigate(`/${page}`)} />
          } />
        <Route
          path="/about"
          element={
            <About
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              onNavigate={handleNavigate}
            />
          }
        />
        <Route
          path="/resources"
          element={
            <Resources
              onNavigate={handleNavigate}
            />
          }
        />
        <Route path="/:slug" element={<SanityPage />} />
      </Routes>

      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      {isCartOpen && (
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={(id) =>
            setCartItems(prev => prev.filter(item => item.id !== id))
          }
          onUpdateQuantity={(id, qty) =>
            setCartItems(prev =>
              prev.map(item => (item.id === id ? { ...item, quantity: qty } : item))
            )
          }
        />
      )}
    </>
  )
}

const LDApp = withLDProvider({
  clientSideID: "686ffb31d2db8409436cef4b",
  reactOptions: {
    useCamelCaseFlagKeys: false,
  },
})(() => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
))

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LDApp />
)

export { App }
