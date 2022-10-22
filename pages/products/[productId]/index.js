import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
function ProductId() {
    const router = useRouter()
    const id = router.query.productId
  return (
    <div>
      <div>
        <Link href="/products/20/review/20">
          <a >
            Product 1
        </a>
        </Link>
    </div>
      <div>
      <Link href="/products/30/review/7">
          <a >
            Product 2
        </a>
        </Link>
    </div>
      <div>
      <Link href="/products/88/review/10" replace>
          <a >
            Product 3
        </a>
        </Link>
    </div>

    </div>
  )
}

export default ProductId