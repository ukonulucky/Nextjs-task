import React from 'react'
import axios from "axios"
import Users from '../components/Users'
function users({ users}) {
   
  return (
      <div>
          <h2>List Of Users</h2>
          {
              users?.map(i => <div key={i.id}> 
                  <Users user={ i } />
              </div>) 
          }
             
    </div>
  )
}

export default users



export  async function getStaticProps() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        if (res) {
            console.log(res.data)
            return {
                props: {
                    users: res.data
                }
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}
