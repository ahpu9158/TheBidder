import { useState } from "react";

export default function BannerAd({src}:{src:string}) {
    const [showReason, setShowReason] = useState(false);

    return (
        <div className="fixed top-16 right-4 z-50 w-72 bg-gradient-to-br from-black via-gray-900 to-black text-white font-extrabold px-6 py-4 rounded-l-3xl shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="flex justify-end">
                <button 
                    onClick={() => setShowReason(!showReason)} 
                    className="text-white text-2xl hover:text-red-500 transition-colors duration-300"
                >
                    ×
                </button>
            </div>

            {showReason ? (
                <div className="mt-4 p-4 bg-gray-800 bg-opacity-80 text-sm rounded-lg animate-fade-in-down">
                    🎯 Why you see this: <br /> Why NOT.</div>
            ) : (
                <img 
                    src={src}
                    className="w-full h-full rounded-lg shadow-lg animate-fade-in-up" 
                    alt="Nil888 Banner" 
                />
            )}
        </div>
    );
}
