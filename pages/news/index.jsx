import axios from 'axios'
import React from 'react'
import Link from "next/link"


function Index({ news }) {
  return (
      news.map((i) => {
          return (
            <div key={i.id}>
            <Link href={ `/news/${i.category}`}>
            <a >
            {i.id}. {i.title} | {i.category}
            </a>
            </Link>
        <hr />
      </div>
         )
     })
  )
}

export default Index


export async function getServerSideProps() {
    try {
        const res = await axios.get("http://localhost:4000/news")
        if (res) {
            return {
                props: {
                    news: res.data
                }
            }
        }
    } catch (error) {
        return {
       notFound: true
   }       
    }
    
}