  import Link from "next/link"
  import { siteConfig } from "@/config/site"

  export function MainNav() {
    return (
      <div className="flex flex-col items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/ukbac.logo.black.png" alt="Logo" className="h-10 w-100" />
        </Link>
        <nav className="flex items-center space-x-7">
          <span>
            <Link href="/shop" className="text-sm font-medium">
              Shop
            </Link>
          </span>
          <span>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </span>
        </nav>
      </div>
    )
  }
