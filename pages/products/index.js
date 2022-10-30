import React from 'react'
import axios from "axios"
import Link from "next/link"


function Products({ products }) {
  const productEle = products.map((i) => {
    return (
      <div key={ i.id }>
         <Link href={`products/${i.id}`} >
        <a>
          {i.id}.{ i.name}
      </a>
      </Link>
     </div>
    )
  })
  return (
    <div>
      {
        productEle
      }
    </div>

  )
}

export default Products

export async function getStaticProps() {
  try {
    const res = await axios.get("http://localhost:4000/products")
    if (res.data) {
      return {
        props: {
          products: res.data
          
        },
        revalidate: 10
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}