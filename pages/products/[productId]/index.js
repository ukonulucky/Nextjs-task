import axios from 'axios'
import React from 'react'
import { useRouter} from "next/router" 

function ProductsId({ product }) {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
         <p>{product.id}. {product.name}</p>
      <p>{ product.description}</p>
    </div>
  )
}

export default ProductsId

export async function getStaticProps(context) {
  const { params } = context
  try {
    const res = await axios.get(`http://localhost:4000/products/${params.productId}`)
    if (res.data) {
      return {
        props: {
          product: res.data
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


export async function getStaticPaths() {
  try {
    return {
      paths: [
        {
          params: {
            productId:"1"
          }
        },
        {
          params: {
            productId: "2"
          }
        }
      ],
      fallback: true
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
  
}