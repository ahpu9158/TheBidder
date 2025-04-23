import BACKEND_URL from "../config";


export default async function voteReport(token: string | undefined, reportId: string) {
    console.log("Sending token:", token);

    const response = await fetch(`${BACKEND_URL}/api/v1/reports/${reportId}/vote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
        },
    })
    if (!response.ok) {
        return new Error("Failed to fetch vote")
    }

    return await response.json()
    
}