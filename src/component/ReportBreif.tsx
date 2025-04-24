'use client';
import { useState } from 'react';
import { BidderReport } from "../../interface";
import Link from 'next/link';
import voteReport from '@/libs/reports/voteReports';

const typeStyles = {
    annoying: {
        color: "bg-yellow-100 text-yellow-800 border-yellow-400",
        icon: "😑",
    },
    disturbing: {
        color: "bg-orange-100 text-orange-800 border-orange-400",
        icon: "🚨",
    },
    extreme: {
        color: "bg-red-100 text-red-800 border-red-500",
        icon: "🔥",
    },
    infectious: {
        color: "bg-purple-100 text-purple-800 border-purple-500",
        icon: "☣️",
    },
};

export default function ReportBrief({ report, token }: { report: BidderReport, token: string }) {
    const { type, voted, theBidder } = report;
    const style = typeStyles[type as keyof typeof typeStyles] || typeStyles.annoying;

    const [showVotedModal, setShowVotedModal] = useState(false);
    const [showBidderModal, setShowBidderModal] = useState(false);
    const [showConfirmVoteModal, setShowConfirmVoteModal] = useState(false); // new state for confirmation modal

    const handleVote = () => {
        setShowConfirmVoteModal(true); // Show confirmation modal when clicked
    };

    const confirmVote = async () => {
        // Call your API to handle the vote here
        await voteReport(token, report._id)
            .then((response) => {
                console.log("Vote successfully cast:", response);
                // Optionally, refresh the page or update the state to reflect the new vote count
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error casting vote:", error);
            });
        setShowConfirmVoteModal(false);
    };


    return (
        <>
            <div className={`flex flex-col gap-2 p-3 border-l-8 rounded-md shadow-md ${style.color}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-md font-bold tracking-wide flex items-center gap-1">
                        <span>{style.icon}</span> {report.title}
                    </h2>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-white bg-opacity-30 border border-white uppercase">
                        {type}
                    </span>
                </div>
                

                <p className="text-sm text-black"><strong>👤</strong> {report.reporter.name}</p>

                <p
                    className="text-sm text-black cursor-pointer hover:underline"
                    onClick={() => setShowBidderModal(!showBidderModal)}
                >
                    <strong>🎯</strong>{" "}
                    {theBidder.length > 1
                        ? `${theBidder[0].name} และคณะ`
                        : theBidder.map(b => b.name).join(", ")}
                </p>

                <p
                    className="text-xs text-black font-bold cursor-pointer hover:underline"
                    onClick={() => setShowVotedModal(!showVotedModal)}
                >
                    ✅ Votes: {voted.length}
                </p>

                <p className="text-xs text-black italic">{report.reason}</p>

                <button
                    onClick={handleVote}
                    className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-700 px-3 py-1 mt-1 w-fit rounded-full hover:scale-105 transition-transform"
                >
                    VOTE
                </button>
            </div>

            
            {showConfirmVoteModal && (
                <div className="bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h3 className="text-lg font-semibold mb-4">Are you sure you want to vote?</h3>
                        <div className="flex justify-between">
                            <button
                                onClick={confirmVote}
                                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-700"
                            >
                                Sure
                            </button>
                            <button
                                onClick={confirmVote}
                                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                            >
                                Sure but red
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showVotedModal && (
                <div className=" bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50 w-64">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-md font-semibold">🗳️ Voted Users</h3>
                        <button onClick={() => setShowVotedModal(false)} className="text-gray-500 hover:text-black">✕</button>
                    </div>
                    <ul className="text-sm text-black list-disc list-inside space-y-1">
                        {voted.length > 0 ? (
                            voted.map((v: any) => (
                                <li key={v._id}>{v.name} (@{v.username})</li>
                            ))
                        ) : (
                            <li className="italic text-gray-500">No one voted yet</li>
                        )}
                    </ul>
                </div>
            )}

            {showBidderModal && (
                <div className=" bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50 w-64">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-md font-semibold">The Bidders</h3>
                        <button onClick={() => setShowBidderModal(false)} className="text-gray-500 hover:text-black">✕</button>
                    </div>
                    <ul className="text-sm text-black list-disc list-inside space-y-1">
                        {theBidder.map((b: any) => (
                            <li key={b._id}>{b.name} (@{b.username})</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
