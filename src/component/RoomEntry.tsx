import Link from "next/link";
import { SimplifiedRoomData } from "../../interface";
import { Users, Trophy, User } from "lucide-react";

export default function RoomEntry({ room }: { room: SimplifiedRoomData }) {
    const topScore = Math.max(...room.scoreBoard.map(entry => entry.score));
    const colorRing = ["bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-green-500"];
    const ringColor = colorRing[room.name.length % colorRing.length];

    return (
        <div className={`w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 border-4 ${ringColor} hover:scale-[1.01] transition-all duration-300`}>
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-extrabold text-gray-800 tracking-wider">{room.name}</h2>
                <span className="text-base text-gray-500 italic">{room.description}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-base text-gray-700">
                <div className="flex items-center gap-2">
                    <User className="text-indigo-500" size={20} />
                    <span className="font-semibold">Host:</span> {room.host.name}
                </div>
                <div className="flex items-center gap-2">
                    <Users className="text-pink-500" size={20} />
                    <span className="font-semibold">Members:</span> {room.members.length}
                </div>
                <div className="flex items-center gap-2">
                    <Trophy className="text-yellow-500" size={20} />
                    <span className="font-semibold">Top Score:</span> {topScore}
                </div>
            </div>

            <div className="mt-6 text-right">
                <Link
                    href={`/room/${room._id}`}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg px-5 py-2 rounded-full shadow-md hover:brightness-110 transition-all"
                >
                    Join Room 🎉
                </Link>
            </div>
        </div>
    );
}
