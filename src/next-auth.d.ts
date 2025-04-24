import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            name: string,
            username: string,
            role: string,
            token: string
        }
    }
}