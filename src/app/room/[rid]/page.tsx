import { env } from 'node:process'
import React from 'react'
import getRoom from '@/libs/rooms/getRoom'
import Information from '@/component/information'
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";


type Props = {
    params: { rid: string };
};

export default async function Room({ params }: Props) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.token) {
        return <p className="text-center text-gray-500">Unauthorized. Please log in.</p>;
    }
    
    const roomData = await getRoom(params.rid, session?.user?.token);

    return (
        <div>
            <Information roomData={roomData.data} reportData={roomData.reports} userID={session.user._id} userRole = {session.user.role} />
            {JSON.stringify(roomData, null, 2)}
        </div>
    )
}