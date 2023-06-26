
  
  import Link from "next/link"
  import { siteConfig } from "@/config/site"

  export function MainNav() {
    return (
      <div className="flex flex-col items-center pr-80 pt-3.5">
        <Link href="/" className="flex items-center space-x-2 justify-center ">
          <img src="/ukbac.logo.black.png" alt="Logo" className="h-10 w-100" />
        </Link>
        <nav className="flex items-center space-x-5">
          <span className="hover:scale-110">
            <Link href="/shop" className="text-sm font-medium  ">
              Shop
            </Link>
          </span>
          <span className="hover:scale-110">
            <Link href="/about" className="text-sm font-medium  hover:scale-105">
              About
            </Link>
          </span>
        </nav>
      </div>
    )
  }
