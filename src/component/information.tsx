'use client';
import { RoomData } from "../../interface";
import ScoreBoard from "./ScoreBoard";
import { BidderReport } from "../../interface";
import ReportBrief from "./ReportBreif";

export default function Information({ roomData, userID, userRole, reportData }: { roomData: RoomData, userID: string, userRole: string, reportData: BidderReport[] }) {
    const members = roomData.members;
    const isUserInRoom = members.some(member => member._id === userID) || userRole === "admin";
    console.log(userRole);
    console.log(isUserInRoom);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-10 py-8 text-white">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-7xl font-extrabold text-purple-400 drop-shadow-lg mb-4 tracking-wide ">
                        {roomData.name}
                    </h1>
                    <p className="text-2xl italic text-gray-200 mb-3">
                        (bid.) {roomData.description}
                    </p>
                    <p className="text-md bg-purple-700 text-white px-4 py-1 rounded-full inline-block shadow-md">
                        Hosted by: <span className="font-semibold">{roomData.host.name}</span>
                    </p>
                </div>

                <div className="text-right">
                    {isUserInRoom ? (
                        <div className="text-lg mb-4 animate-pulse text-green-400 font-semibold">
                            Welcome back, warrior.
                        </div>
                    ) : null}
                    <button className="bg-purple-700 hover:bg-purple-900 transition-all border-4 border-amber-300 w-40 h-16 text-xl font-bold text-white rounded-full shadow-lg transform hover:scale-105 active:scale-95 duration-300">
                        Join Room
                    </button>
                </div>
            </div>

            <div className="flex flex-row gap-6 justify-center items-start">
                <div className="flex flex-col bg-gray-100 text-black rounded-2xl shadow-xl px-10 py-8 w-2/3">
                    <ScoreBoard scoreBoard={roomData.scoreBoard} />
                </div>

                <div className="flex flex-col bg-gray-100 text-black rounded-2xl shadow-xl px-10 py-8 w-1/3">
                    <button className="bg-red-600 hover:bg-red-800 transition-all border-4 border-amber-200 w-40 h-16 text-xl font-bold text-white rounded-full shadow-md mb-6 transform hover:scale-105 active:scale-95 duration-300">
                        New Report
                    </button>
                    <h2 className="text-2xl font-semibold mb-2 text-red-700">Reporting Bidder</h2>
                    <p className="text-sm text-gray-700 italic">
                        
                    </p>
                    {reportData.map((report, index) => (
                        <ReportBrief key={index} report={report} />
                    ))}
                </div>
            </div>
        </div>
    );
}
