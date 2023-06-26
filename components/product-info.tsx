"use client"

import { useState } from "react"
import Link from "next/link"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  function addToCart() {
    const item = {
      ...product,
      product_data: {
        size: selectedSize
      },
    }

    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`,
      description: "added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>open cart</span>
          </Button>
        </Link>
      ),
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {formatCurrencyString({
            value: product.price,
            currency: product.currency,
          })}
        </p>
      </div>
      <div className="mt-4">
        <p>
          size: <strong>{getSizeName(selectedSize)}</strong>
        </p>
        {product.sizes.map((size) => (
          <Button
            onClick={() => setSelectedSize(size)}
            key={size}
            variant={selectedSize === size ? "outline" : "default"}
            className="mr-2 mt-4"
          >
            {getSizeName(size)}
          </Button>
        ))}
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            onClick={addToCart}
            className="w-32 bg-white py-2 px-4 text-lg font-bold text-black border border-black hover:bg-white hover:text-black hover:scale-105 focus:outline-none "
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  )
}
