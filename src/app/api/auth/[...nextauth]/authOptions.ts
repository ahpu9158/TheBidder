import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/Auth/userLogIn";

export const authOptions:AuthOptions = {
    providers: [
        // Authentication Provider, use Credentials Provider
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "username", placeholder: "username" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              if (!credentials) return null
              const user = await userLogIn(credentials.username, credentials.password)
        
              // If no error and we have user data, return it
              if (user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
        })
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/signin", // Custom login page
        signOut: "/signout", // Custom logout page
        error: "/signin?error=true", // Redirect on error
    },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token ? (token as any) : null;
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        }
    }
}