import BACKEND_URL from "../config";

export default async function createReport(token: string | undefined, submittedData: any) {
    
    const response = await fetch(`${BACKEND_URL}/api/v1/reports`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Send user's token
        },
        body: JSON.stringify(submittedData) // Add the body with submitted data
    })
    if (!response.ok) {
        return new Error("Failed to fetch booking")
    }

    return await response.json()
    
}