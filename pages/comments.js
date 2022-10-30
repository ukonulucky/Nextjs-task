import React, { useState, useEffect } from 'react'
import axios from "axios"



function Comments() {
    const [comments, setComments] = useState([])
    const [editComment, setEditComment] = useState("")
    const [newComment, setNewComment] = useState("")
     const [info, setInfo] = useState(false)
    const [error, setError] = useState("")
    async function handleComments() {
        try {
            console.log(newComment)
            const res = await axios.post("/api/comments", 
                {
                    comment: newComment
                }
            )
            if (res.data) {
                alert(res.data)
                setInfo(!info)
                setNewComment("")
            }
        } catch (error) {
            alert(error.message)
        }
    }
async function editCommentHandler(id) {
   try {
       const res = await axios.patch(`/api/comments/${id}`, {
        editComment
    })
    if (res) {
        setInfo(!info)
        alert(res.data)
    }
   } catch (error) {
    alert(error.message)
   }
}
     async function deleteComment (id) {
        try {
            const res = await axios.delete(`/api/comments/${id}`)
            if (res) {
                 setInfo(!info)
                alert(res.data)
            }
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("/api/comments")
               if (res) setComments(res.data)
                console.log(comments)
            } catch (error) {
                setError(error.message)
            }
         }
            fetchData()
 }, [info])

    if (error) return <div>{ error}</div>
  return (
      <div>
          <input type="text" value={newComment} onChange={(e) => {
              setNewComment(e.target.value)
          }} />
          <button onClick={handleComments}>
              Submit Comment
          </button>
          {
              comments.map((i) => (
                  <div key={i.id}>
                 
                  <p>{i.id}. {i.text}
                      <button onClick={() => {
                          deleteComment(i.id)
                          }}>Delete</button></p>
                      <input type="text" value={editComment} onChange={(e) => {
                          setEditComment(e.target.value)
                      }} />
                       <button onClick={() => {
                          editCommentHandler(i.id)
                          }}>Edit</button>
                       </div>
              ) )
          }
    </div>
  )
}

export default Comments