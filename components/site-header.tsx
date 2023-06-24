'use client'

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

  if(pathname.startsWith('/studio')) return null


  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <div className="flex items-center space-x-1 ml-auto">
          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <span className="h-5 w-5">Cart</span>
              <span className="ml-2 text-sm font-bold">0</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size='sm' variant='ghost'>
                 <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
