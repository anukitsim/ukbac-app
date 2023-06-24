import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { seedSanityData } from "@/lib/seed"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"


interface Props {
  searchParams: {
    category?: string


  }
}

export default async function Shop({ searchParams }: Props) {
  const { category } = searchParams
  const productFilter = `_type == "product"`
  const categoryFilter = category ? `&& "${category}" in categories` : ''
  const filter = `*[${productFilter}${categoryFilter}]`
  
  const products = await client.fetch<
    SanityProduct[]
  >(groq`${filter}{
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    "slug": slug.current
  }`)
 

  return (
    <div>
      <div className="px-4 pt-20 text-center">
   
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
                </div>
              
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
