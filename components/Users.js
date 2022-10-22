import React from 'react'

function Users({ user }) {
  return (
      <div>
           <p>{user.name}</p>
           <p>{ user.email}</p>
    </div>
  )
}

export default Users