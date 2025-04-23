import BACKEND_URL from "../config";

export default async function getRoom(id:string, token: string | undefined) {
    
    const response = await fetch(`${BACKEND_URL}/api/v1/rooms/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Send user's token
        }
    })
    if (!response.ok) {
        return new Error("Failed to fetch booking")
    }

    return await response.json()
    
}