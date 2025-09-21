import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { SanityPage } from "@/lib/cms/components/PageLayout"
import { Navigation } from "@/components/ui/navigation";
import type { PageType } from "@/components/ui/navigation/types";
import { withLDProvider } from "launchdarkly-react-client-sdk"
import { Footer } from '@/components/ui/navigation/footer'
import "./index.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const navigate = useNavigate()

    const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
    if (page === "home") navigate("/")
    else navigate(`/${page}`)
  }

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/:slug" element={<SanityPage />} />
      </Routes>
      <Footer onNavigate={handleNavigate} />
    </>
  );
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
