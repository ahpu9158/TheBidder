'use client';
import { BidderReport } from "../../interface";
import Link from 'next/link';

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

export default function ReportBrief({ report }: { report: BidderReport }) {
    const { type } = report;
    const style = typeStyles[type as keyof typeof typeStyles] || typeStyles.annoying;

    return (
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
            <p className="text-sm text-black truncate"><strong>🎯</strong> {report.theBidder.map(b => b.name).join(", ")}</p>
            <p className="text-xs text-black italic">{report.reason}</p>
            <p className="text-xs text-black font-bold">✅ Votes: {report.voted.length}</p>

            <Link
                href={`/vote/${report._id}`}
                className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-700 px-3 py-1 mt-1 w-fit rounded-full hover:scale-105 transition-transform"
            >
                VOTE
            </Link>
        </div>
    );
}
