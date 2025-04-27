import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/Auth/getUserProfile";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let userProfile = null;
  if(session?.user?.token) {
    userProfile = await getUserProfile(session.user.token);
  }
  
  //const userProfile = session?.user?.token ? await getUserProfile("session.user.token") : "debugging...";
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-7xl font-extrabold text-purple-600 animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
        วันนี้คุณบิดแล้วหรือยัง?
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl font-medium">
      บิดเข้าป่า บิดเข้าเขา บิดทุกศุกร์ ล่ะกูบิดทุกเสาร์ บิดไฮโล บิดลูกเต๋า บิดปลาทู ล่ะกูบิดปลาเก๋า
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/room"
          className="bg-black text-white px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-md"
        >
          Enter
        </Link>
        {session?.user?.token ? (
          <Link
            href="/signout"
            className="bg-white text-black px-6 py-3 rounded-full border-2 border-black font-bold text-lg hover:bg-black hover:text-white transition-all"
          >
            Signout from {"" + userProfile?.data.username}
          </Link>
        ) : (
          <Link
            href="/signin"
            className="bg-white text-black px-6 py-3 rounded-full border-2 border-black font-bold text-lg hover:bg-black hover:text-white transition-all"
          >
            Sign In
          </Link>
        )}

        
      </div>

      
    </div>
  );
}
