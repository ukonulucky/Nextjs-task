import React, { useState} from 'react'
import axios from 'axios'
import { useRouter } from "next/router"



function Events({ events }) {
    const [data, setData] = useState(events)
    const [error, setError] = useState("")
    const router = useRouter()
  return (
      <div>
          <button onClick={async () => {
              try {
                const res = await axios.get("http://localhost:4000/events?category=coding")
                  if (res.data) {
                      setData(res.data)
                      router.push("/events?category=coding", undefined, {shallow:true})
                }
              
              } catch (error) {
                  console.log(error.message)
                  setError(error.message)
              }
          }}>
              filter dancing
        </button>
          {
              error ? <p>Error Occured From Server</p> : data.map(i => (
                <div key={i.id}>
                    <p>{i.id}. {i.title} | {i.category}</p>
                    <p>{ i.description }</p>
                    <hr />
                </div>
            ))
          }
    </div>
  )
}

export default Events

export async function getServerSideProps(context) {
  try {
    const { query } = context
    let { category } = query
      if (category == "coding") category = "category=coding"
      if (category == "writing") category = "category=writing"
      if(category == "dancing") category = "category=dancing"
      if(!category) category = ""
      const res = await axios.get(`http://localhost:4000/events?${category}`)
      if (res.data) {
          return {
              props: {
                   events: res.data
               }
           }
       }
  } catch (error) {
      return {
        notFound: true
    }
  }

   
} 
