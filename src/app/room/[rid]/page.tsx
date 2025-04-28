import { env } from 'node:process'
import React from 'react'
import getRoom from '@/libs/rooms/getRoom'
import Information from '@/component/information'
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import getUserProfile from '@/libs/Auth/getUserProfile';



export default async function Room(  props: {
    params: Promise<{ rid: string }>;
  }
) {
    const { rid } = await props.params;

    const session = await getServerSession(authOptions);

    let userProfile = null;
          if(session?.user?.token) {
            userProfile = await getUserProfile(session.user.token);
        }

    const roomData = await getRoom(rid, session?.user?.token);


    return (
        <div>
            <Information 
            roomData={roomData?.data} 
            reportData={roomData?.reports} 
            token={session?.user?.token || ''} 
            userProfile={userProfile?.data || { name: 'Anonymous', username: 'guest', role: 'guest' }}
            />
        </div>
    )
}