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
              <div>
              <Link href="/post">
          <a>
          Post List       
         </a>
      </Link>
             </div>
     </div>
      </div>
      
  )
}

export default index