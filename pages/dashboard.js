import React, { useState} from 'react'
import useSWR  from "swr"


function dashboard() {
    const [dashBoardData, setDashBoardData] = useState("")

    async function fetchData() {
        const res = await fetch("http://localhost:4000/dashboard")
        const data = await res.json()
         setDashBoardData(data)
        return data
    }
    const { data, error } = useSWR("dashboadData", fetchData)
    if (error) return <p>An Error Occured</p>
    if(!data) return <p>LOading......</p>

  return (
      <div>
          <p>Number Of Post:{dashBoardData.post}</p>
          <p>Number Of likes:{dashBoardData.likes}</p>
          <p>Number Of Following:{dashBoardData.following}</p>
          <p>Number Of Followers:{ dashBoardData.followers}</p>
    </div>
  )
}

export default dashboard