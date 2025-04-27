import { ChevronUpSquare } from "lucide-react";
import BACKEND_URL from "../config";

export default async function getUserProfile(token:string) {
    console.log(`${BACKEND_URL}/api/v1/auth/me`)

    const response = await fetch(`${BACKEND_URL}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })


    if (!response.ok) {
        throw new Error("Cannot get user profile")
    }

    return await response.json()

}