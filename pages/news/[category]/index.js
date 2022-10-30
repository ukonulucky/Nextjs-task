import axios from 'axios'
import React from 'react'

function Index({ category, news}) {
  return (
    <div>
      <h2>the list of { category } is</h2>
      {
        news.map((i) => {
          return (
            <p key={i.id}>
              {i.id}.{i.title} | {i.description}
              <hr />
            </p>
          
          )
        })
      }
    </div>
  )
}

export default Index

export async function getServerSideProps(context) {
    try {
      const { params } = context
      const { category } = params
        const res = await axios.get(`http://localhost:4000/news?category=${category}`)
      if (res.data) {
        return {
          props: {
            news: res.data,
            category
         }
       }
     }
    } catch (error) {
       return {
        notFound: true
    }
   }
    
}