import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession, getSession} from "next-auth/react"

function Index() {
    const { data: session, status } = useSession()
  
    console.log(session, status)
    const handleSignIn = (e) => {
        e.preventDefault()
        signIn("github")
    }
    const handleSignOut = (e) => {
        e.preventDefault()
        signOut()
   }
  return (
      <div className="div">
          {
              status.loading && <p>Loading...</p>
         }
          {
              !session && <a href="" onClick={handleSignIn}>Sign In</a>
          }
          {
              session && <div className="text">
                  <p>{session.user.name}, {session.user.email}</p>
                  <img
                    src={session.user.image}
                      alt="display picture"
                      width="100px"
                      height="150px"
                  />
                  <a href="" onClick={handleSignOut}>Sign Out</a>
              </div>
          }
   </div>
  )
}

export default Index