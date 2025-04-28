'use client';
import { RoomData, User } from "../../interface";
import ScoreBoard from "./ScoreBoard";
import { BidderReport } from "../../interface";
import ReportBrief from "./ReportBreif";
import { useState } from "react";
import ReportForm from "./ReportFrom";
import ReportList from "./ReportList";
import BannerAd from "./BannerAds";

export default function Information({ roomData, reportData,token, userProfile }: { roomData: RoomData, reportData: BidderReport[], token: string, userProfile: User }) {
    const [showModal, setShowModal] = useState(false);
    const [showReason, setShowReason] = useState(false)
    const members = roomData.members;
    const isUserInRoom = members.some(member => member._id === userProfile._id) || userProfile.role === "admin";
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
                            Welcome back {userProfile.name}
                        </div>
                    ) : (<button className="bg-purple-700 hover:bg-purple-900 transition-all border-4 border-amber-300 w-40 h-16 text-xl font-bold text-white rounded-full shadow-lg transform hover:scale-105 active:scale-95 duration-300">
                    View as guest
                </button>)}
                    
                </div>
            </div>

            <div className="flex flex-row gap-6 justify-center items-start">
                <div className="flex flex-col bg-gray-100 text-black rounded-2xl shadow-xl px-10 py-8 w-2/3">
                    <ScoreBoard scoreBoard={roomData.scoreBoard} />
                </div>

                <div className="flex flex-col bg-gray-100 text-black rounded-2xl shadow-xl px-10 py-8 w-1/3">
                    <button className="bg-red-600 hover:bg-red-800 transition-all border-4 border-amber-200 w-40 h-16 text-xl font-bold text-white rounded-full shadow-md mb-6 transform hover:scale-105 active:scale-95 duration-300"
                    onClick={() => setShowModal(true)}>
                        New Report
                    </button>
                    <h2 className="text-2xl font-semibold mb-2 text-red-700">Reports</h2>
                    <p className="text-sm text-gray-700 italic">
                        
                    </p>
                    <ReportList reportData={reportData} userId={userProfile._id} token={token} inRoom={isUserInRoom}/>

                </div>

                <BannerAd src="/img/Nil.jpg"/>

               
            </div>

            

            {showModal && (
                <div className="absolute top-12 right-0 z-50 w-[28rem] bg-white border-2 border-red-400 rounded-2xl shadow-2xl p-4">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setShowModal(false)}
                            className="text-black hover:text-red-600 text-xl font-bold"
                        >
                            ✖
                        </button>
                    </div>
                    {
                        isUserInRoom ? (<ReportForm roomData={roomData} token={token} />):
                        (<div className="text-center text-red-600 font-bold text-lg">You are not a member of this room.</div>)
                    }
                    
                </div>
            )}
        </div>
    );
}
