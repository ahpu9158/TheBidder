import { useState } from "react";
import ReportBrief from "./ReportBreif";

const REPORTS_PER_PAGE = 3;

export default function ReportList({
    reportData,
    userId,
    token,
}: {
    reportData: any[];
    userId: string;
    token: string | undefined;
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showVoted, setShowVoted] = useState(false); // toggle state

    const filteredReports = reportData.filter((report) =>
        showVoted ? report.voted.includes(userId) : !report.voted.includes(userId)
    );

    const totalPages = Math.ceil(filteredReports.length / REPORTS_PER_PAGE);
    const startIndex = (currentPage - 1) * REPORTS_PER_PAGE;
    const currentReports = filteredReports.slice(startIndex, startIndex + REPORTS_PER_PAGE);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

    const toggleView = () => {
        setShowVoted(!showVoted);
        setCurrentPage(1); // reset to page 1 when toggling
    };

    return (
        <div className="space-y-4">
            {/* Toggle Switch */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-black">
                    {showVoted ? "Reports You Voted On" : "Reports You Haven’t Voted Yet"}
                </h3>
                <button
                    onClick={toggleView}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
                >
                    {showVoted ? "Show Unvoted Reports" : "Show Voted Reports"}
                </button>
            </div>

            {currentReports.length > 0 ? (
                currentReports.map((report, index) => (
                    <ReportBrief key={startIndex + index} report={report} token={token || ""}/>
                ))
            ) : (
                <p className="text-gray-600 italic">No reports found in this view.</p>
            )}

            {filteredReports.length > REPORTS_PER_PAGE && (
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                    >
                        ⬅ Prev
                    </button>
                    <span className="text-black">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                    >
                        Next ➡
                    </button>
                </div>
            )}
        </div>
    );
}
