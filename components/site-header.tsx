"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const { cartCount } = useShoppingCart()
  if (pathname.startsWith('/studio')) return null

  return (
    <header className="top-5 z-40 w-full bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-end space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <div className="flex items-center space-x-1 ml-auto">
          <Link href="/login" className="text-sm font-medium hover:scale-110">
            Login
          </Link>
          <Link href="/cart">
            <Button size="sm" className="hover:no-underline text-sm font-medium bg-cartButtonBg dark:text-white dark:bg-black">
              <span className="h-5 w-5">Cart</span>
              <span className="ml-2 text-sm font-bold text-cartButtonText dark:text-white">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size='sm' variant='default' className="bg-adminPanelBg dark:text-white dark:bg-black">
                <Edit className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}