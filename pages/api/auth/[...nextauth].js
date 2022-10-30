import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import dbResult from "components/mongoSetub"
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
 adaptor: MongoDBAdapter(dbResult),
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.SECRET
  }
}
export default NextAuth(authOptions)