"use client"

import { Button } from "@/components/ui/button"
import type { ProductWithQuantity } from "@/lib/types"

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ProductWithQuantity[];
  onRemoveItem: (id: string | number) => void;
  onUpdateQuantity: (id: string | number, quantity: number) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
}: CartDrawerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="bg-black/50 flex-1" onClick={onClose}></div>
      <div className="w-80 bg-white shadow-xl p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <div className="flex-1 overflow-y-auto space-y-3">
          {items.length === 0 && <p>Your cart is empty</p>}
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-sm text-gray-500">${item.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  className="w-12 border rounded px-1 text-center"
                  onChange={e => onUpdateQuantity(item.id, Number(e.target.value))}
                />
                <Button size="sm" variant="outlined" onClick={() => onRemoveItem(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={onClose} className="mt-4 w-full">
          Close
        </Button>
      </div>
    </div>
  )
}