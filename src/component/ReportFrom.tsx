import { useState } from "react";
import { RoomData } from "../../interface";
import createReport from "@/libs/reports/createReports";
import Swal from "sweetalert2";

export default function ReportForm({ roomData, token }: { roomData: RoomData, token: string }) {
    const [title, setTitle] = useState("");
    const [reason, setReason] = useState("");
    const [type, setType] = useState("annoying");
    const [selectedBidder, setSelectedBidder] = useState("");
    const [bidders, setBidders] = useState<string[]>([]);
    const [submittedData, setSubmittedData] = useState<any>(null); // To show confirmation

    const handleAddBidder = () => {
        if (selectedBidder && !bidders.includes(selectedBidder)) {
            setBidders([...bidders, selectedBidder]);
        }
    };

    const handleRemoveBidder = (id: string) => {
        setBidders(bidders.filter((bidderId) => bidderId !== id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const reportData = {
            title,
            reason,
            type,
            room: roomData._id,
            theBidder: bidders,
        };
        console.log("Submitting Report:", reportData);

        await createReport(token, reportData)
            .then((response) => {
                console.log("Report successfully created:", response);
                setSubmittedData(response);
            })
            .catch((error) => {
                console.error("Error creating report:", error);
            });
        // Simulated API submission
        setSubmittedData(reportData);
        // Refresh the page or reset the form state after submission
        Swal.fire({
            icon: "success",
            title: "Report Submitted!",
            text: "Your report has been submitted successfully.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        }).then(() => {
            window.location.reload();
        });

        // Optional: Clear form after submission
        // setTitle(""); setReason(""); setType("annoying"); setBidders([]); setSelectedBidder("");
    };

    return (
        <div className="max-w-xl mx-auto text-white p-8">
            <div className="bg-black shadow-2xl rounded-2xl p-8 space-y-6 border-4 border-red-600">
                <h1 className="text-3xl font-extrabold text-red-500 drop-shadow">
                    🚨 Create Report 🚨
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-bold text-yellow-300 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border-2 border-yellow-400 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-bold text-yellow-300 mb-2">Reason</label>
                        <input
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border-2 border-yellow-400 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-bold text-yellow-300 mb-2">Type</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border-2 border-yellow-400 rounded-lg"
                        >
                            <option value="annoying">Annoying</option>
                            <option value="disturbing">Disturbing</option>
                            <option value="extreme">Extreme</option>
                            <option value="infectious">Infectious</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-lg font-bold text-yellow-300 mb-2">Room ID</label>
                        <input
                            type="text"
                            value={roomData._id}
                            disabled
                            className="w-full px-4 py-2 bg-gray-700 border-2 border-red-500 rounded-lg"
                        />
                    </div>

                    {/* Select and Add Bidders */}
                    <div>
                        <label className="block text-lg font-bold text-yellow-300 mb-2">Select Bidder</label>
                        <div className="flex items-center gap-2">
                            <select
                                value={selectedBidder}
                                onChange={(e) => setSelectedBidder(e.target.value)}
                                className="flex-1 px-4 py-2 bg-gray-800 border-2 border-yellow-400 rounded-lg"
                            >
                                <option value="">-- Choose Member --</option>
                                {roomData.members.map((member) => (
                                    <option key={member._id} value={member._id}>
                                        {member.name}
                                    </option>
                                ))}
                            </select>
                            <button
                                type="button"
                                onClick={handleAddBidder}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
                            >
                                Add
                            </button>
                        </div>

                        {/* Display List */}
                        <div className="mt-4 space-y-2">
                            {bidders.map((id) => {
                                const member = roomData.members.find((m) => m._id === id);
                                return (
                                    <div
                                        key={id}
                                        className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg border border-yellow-500"
                                    >
                                        <span>{member?.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveBidder(id)}
                                            className="text-red-500 hover:text-red-700 text-xl font-bold"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg"
                        >
                            🚨 Submit Report
                        </button>
                    </div>
                </form>
            </div>

            {submittedData && (
                <div className="mt-6 bg-gray-900 border border-green-500 p-4 rounded-lg text-sm overflow-x-auto">
                    <h2 className="text-green-400 font-semibold mb-2">✅ Report Submitted!</h2>
                    <pre className="text-green-200 whitespace-pre-wrap">
                        {JSON.stringify(submittedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}
