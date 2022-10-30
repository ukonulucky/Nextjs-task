import React from 'react'
import { getSession, useSession } from "next-auth/react"
import { redirect } from 'next/dist/server/api-utils'
function User({ data }) {
  return (
      <div>{
          data.user ? <div className="user">
              <p>the user name is {data.user.name}</p>
              <p>the user email is {data.user.email}</p>
              <img width={"100px"} height="130px" src={ data.user.image} alt="authenticated user" />
          </div>: <div className="div">user not logged in</div>
            }</div>
  )
}

export default User

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log(session)
    if (!session) {
        return {
            redirect: {
                destination:"/api/auth/signin?callbackUrl=http://localhost:3000/users",
                parment: false
            }
        }
        
    }
    return {
        props: {
            session,
            data: session ? session : "User not logged In"
        }
    }
}