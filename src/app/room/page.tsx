import { env } from 'node:process'
import React from 'react'
import getRooms from '@/libs/rooms/getRooms'
import Information from '@/component/information'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import RoomList from '@/component/RoomList';
import getUserProfile from '@/libs/Auth/getUserProfile';


export default async function AllRoom() {
    const session = await getServerSession(authOptions);

    let userProfile = null;
      if(session?.user?.token) {
        userProfile = await getUserProfile(session.user.token);
    }

    
    const roomData = await getRooms(session?.user.token)

    return (
        <div>
            <RoomList rooms={roomData.data}/>
            {/* <Information roomData={roomData.data} reportData={roomData.reports} userID={session.user._id} userRole = {session.user.role} /> */}
            {/* {JSON.stringify(roomData, null, 2)} */}
            {JSON.stringify(roomData, null, 2)}

        </div>
    )
}