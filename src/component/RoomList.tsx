import RoomEntry from "./RoomEntry";
import { SimplifiedRoomData } from "../../interface";
// Assume `rooms` is passed in or fetched elsewhere
export default function RoomList({ rooms }: { rooms: SimplifiedRoomData[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-red-100 py-10 px-6 flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold text-purple-700 mb-6">💥 Rooms</h1>
      {rooms.map(room => (
        <RoomEntry key={room._id} room={room} /> // Assuming RoomEntry is a component that takes a room prop
      ))}
    </div>
  );
}
