'use client';
import React, { useState, useEffect } from 'react';
import { ScoreBoardEntry } from '../../interface';

export default function ScoreBoard({ scoreBoard }: { scoreBoard: ScoreBoardEntry[] }) {
    const [scoreBoardData, setScoreBoardData] = useState<ScoreBoardEntry[]>([]);

    useEffect(() => {
        const sortedScoreBoard = [...scoreBoard].sort((a, b) => b.score - a.score);
        setScoreBoardData(sortedScoreBoard);
    }, [scoreBoard]);

    const getRankStyle = (rank: number) => {
        switch (rank) {
            case 0:
                return 'bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 text-black animate-pulse shadow-[0_0_30px_gold]';
            case 1:
                return 'bg-gradient-to-r from-gray-300 via-white to-gray-300 text-black animate-pulse shadow-[0_0_20px_silver]';
            case 2:
                return 'bg-gradient-to-r from-orange-500 via-amber-600 to-orange-500 text-white animate-pulse shadow-[0_0_20px_brown]';
            default:
                return 'bg-purple-700 text-white hover:bg-purple-900 shadow-md hover:shadow-xl';
        }
    };

    return (
        <div className="flex flex-col w-full text-white">
            <h1 className="text-6xl font-extrabold text-center text-purple-500 drop-shadow-2xl mb-8 tracking-widest">
                Scoreboard
            </h1>

            <div className="flex flex-col space-y-5">
                {scoreBoardData.map((entry, index) => (
                    <div
                        key={entry._id}
                        className={`flex justify-between items-center rounded-2xl px-8 py-2 transition-transform duration-300 transform hover:scale-105 ${getRankStyle(index)}`}
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-4xl font-black">{index + 1}</span>
                            <span className="text-2xl font-bold">{entry.user.name}</span>
                        </div>
                        <div className="text-3xl font-extrabold">{entry.score}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
