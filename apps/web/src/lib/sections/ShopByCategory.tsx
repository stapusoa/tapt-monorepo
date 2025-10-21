'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ProductCard } from '@/lib/layout/ProductCard'
import type { Product } from '@/lib/types'

type ShopByCategoryProps = {
  products: Product[]
}

const categories = ['All', 'Youth', 'Community']

export const ShopByCategory = ({ products }: ShopByCategoryProps) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter products based on active category & search
  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="relative shrink-0 -mt-1 py-12 px-6 md:px-12 w-full bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row size-full mx-auto max-w-7xl sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="text-gray-500 mt-1">Explore products by all sorts of categories...</p>
        </div>
        <button className="mt-3 sm:mt-0 text-blue-600 font-semibold hover:underline">
          Shop All
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-col mx-auto max-w-7xl items-start gap-3 mb-4">
                {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-full transition-all font-medium',
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Infinite scroll / Load more button */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Load More
        </button>
      </div>
    </section>
  )
}