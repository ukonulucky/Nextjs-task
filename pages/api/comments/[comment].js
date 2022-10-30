import commentArray from "../../../comments/comments";
export default function handler(req, res) {
    const { comment } = req.query
    if (req.method === 'GET') {
        const data = commentArray.find((i) => i.id === parseInt(comment))
    res.status(200).json(data)
  }
    if (req.method === "DELETE") {
            const id = commentArray.findIndex((i) => i.id === parseInt(comment))
        console.log(id)
        if (id >= 0) {
            commentArray.splice(id, 1)
            res.status(200).json("deletion successfull")
            return
        }
        res.status(200).json("deletion failed")
    }
    if (req.method === "PATCH") {
        const { editComment } = req.body
        console.log(editComment)
        const index = commentArray.findIndex((i) => i.id === parseInt(comment))
        const data = commentArray.find((i) => i.id === parseInt(comment))
        if (data) {
            data.text = editComment
            commentArray.splice(index,1,data)
            console.log(commentArray)
            res.status(200).json("text field changed succeefully")
            return
        }
        res.status(500).json("internal server error")
    }
}
    