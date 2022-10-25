import React from 'react'
import axios from "axios"
import Link from 'next/link'
import { useRouter} from "next/router"
function Index({ users }) {
    const router = useRouter()
    
    
  return (
      <div>
         <h2> List of post </h2>
          {
              users.map(i => (
                  <div key={i.id} >
                      <Link href={`/post/${i.id}` } passHref>
                          <a >
                          <p>{i.id}. { i.title}</p>
                     </a>
                      </Link>
                    <hr />
                  </div>
              ))
          }
    </div>
  )
}

export default Index

export async function getStaticProps() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      
        if (res) {
            return {
                props: {
                    users: res.data.slice(0,7)
                }
            }
        }
        
    } catch (error) {
        console.log(error.message)
    }
}