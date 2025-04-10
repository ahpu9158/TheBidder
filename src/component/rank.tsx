import {PersonData} from "../../interface"

export default function Rank({PersonData,rank}: {PersonData: PersonData, rank:number}) {

    const getColorFromScore = (score: number): string => {
        if (rank === 1) return "bg-red-500";
        else if (rank <= 3) return "bg-yellow-500";
        else if (rank < 8) return "bg-green-500";
        else return "bg-green-100";
    };

    const scoreColor = getColorFromScore(PersonData.score);
  return (
    <div className="flex items-center justify-between w-[80%] bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-6 m-4">
        <div>
            <div className="flex items-center mb-4">
                <p className="text-6xl font-extrabold text-blue-950 px-10 animate-bounce">{`#${rank}`}</p>
                <img src={PersonData.image} alt={PersonData.name} className="rounded-full w-16" />
                <p className="text-3xl font-bold text-blue-950 px-10">{PersonData.name}</p>
            </div>
            <p className="text-xl text-blue-950 italic font-semibold px-10">{`"${PersonData.description}"`}</p>
        </div>
        <div>
            <p className={`text-2xl font-bold text-white ${scoreColor} p-4 rounded-4xl`}>{PersonData.score}</p>
        </div>
    </div>
  );
}