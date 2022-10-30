import { MongoClient } from "mongodb"


const url = process.env.MONGU_URL

const option = {
    useNewUrlParser: true
}

const connectDb =  () => {
    const client = new MongoClient(url, option)
    const connectClient =  client.connect()
    return connectClient
}

const dbResult = connectDb()

export default dbResult 