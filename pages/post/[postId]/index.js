import Reac, {useState } from 'react'
import { useRouter } from "next/router"
import axios from "axios"
function Index({ user }) { 
    const router = useRouter()
    if (router.isFallback) {
        return <h2>Loading....</h2>
    }
   
  return (
      <div>
          <p>{user.title}</p>
          <p>{ user.body}</p>
    </div>
  )
}

export default Index


export async function getStaticProps(context) {
    try {
        const { params } = context
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      
        if (res) {
            return {
                props: {
                    user: res.data
                }
            }
          
      }
 } catch (error) {
     return {
           notFound: true
       }  
    
 }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    postId: "1"
                }
            },
            {
                params: {
                    postId: "2"
                }
            },
            {
                params: {
                    postId: "3"
                }
            },
            {
                params: {
                    postId: "4"
                }
            },
            {
                params: {
                    postId: "5"
                }
            },
            {
                params: {
                    postId: "6"
                }
            },
            {
                params: {
                    postId: "7"
                }
            }
        ],
        fallback:true
    }
}