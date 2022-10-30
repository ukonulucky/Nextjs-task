import { getSession } from "next-auth/react"
async function handler(req, res) {
    const session = await getSession({ req })
    console.log("coming from the protectRoute", session)
    if (!session) {
        res.redirect("/api/auth/signin?callbackUrl=http://localhost:3000/users")
    }
    else {
        res.status(201).json("user logged in successfully")
    }
}

export default handler