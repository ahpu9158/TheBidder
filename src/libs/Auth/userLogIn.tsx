import BACKEND_URL from "../config";

export default async function userLogIn(userName:string, userPassword:string) {

    const response = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: userName,
            password: userPassword,
        }),
    })
    if (!response.ok) {
        throw new Error("Failed to log-in")
    }

    return await response.json()    
    
}