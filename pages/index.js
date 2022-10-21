import React from 'react'
import Link from 'next/link'

function index() {
  return (
      <div> Home page
          <div>
          <Link href="/products/1">
      <a>
          Products Page        
      </a>
      </Link>
     </div>
      </div>
      
  )
}

export default index