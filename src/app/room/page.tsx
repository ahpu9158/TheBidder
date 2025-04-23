import { env } from 'node:process'
import React from 'react'
import getRooms from '@/libs/rooms/getRooms'
import Information from '@/component/information'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import RoomList from '@/component/RoomList';


export default async function AllRoom() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.token) {
        return <p className="text-center text-gray-500">Unauthorized. Please log in.</p>;
    }
    
    const roomData = await getRooms(session.user.token)

    return (
        <div>
            {JSON.stringify(roomData, null, 2)}
            <RoomList rooms={roomData.data}/>
            {/* <Information roomData={roomData.data} reportData={roomData.reports} userID={session.user._id} userRole = {session.user.role} /> */}
            {/* {JSON.stringify(roomData, null, 2)} */}

        </div>
    )
}