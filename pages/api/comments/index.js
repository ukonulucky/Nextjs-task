import commentArray from "../../../comments/comments";

export default function Commentapi(req,res) {
    if (req.method === "GET") {
        console.log("this is coming from the api",commentArray)
      res.status(200).json(commentArray)
    }
    if (req.method === "POST") {
        console.log("post request ran")
        const { comment } = req.body
        const newComment = {
            id: Date.now(),
            text: comment
        }
        commentArray.push(newComment)
        res.status(201).json(comment)
    }

}