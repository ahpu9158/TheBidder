import Image from "next/image";
import Rank from "@/component/rank";
import {PersonData} from "../../interface"
import Link from "next/link";

const mockData: PersonData[] = [
  {
    _id: "1",
    name: "Pheem",
    score: 9999999,
    image: "/img/pheem.jpg",
    description: "bid master"
  },
  {
    _id: "2",
    name: "INat",
    score: 70,
    image: "/img/Inat.png",
    description: "บิดทุกอย่าง ยกเว้นบิดมอไซค์ไปทางที่เปิดไฟเลี้ยว"
  },
  {
    _id: "3",
    name: "_.p0nd._",
    score: 15,
    image: "/img/pond.jpg",
    description: "Soon will bid"
  },
  {
    _id: "4",
    name: "TJ",
    score: 60,
    image: "/img/TJ.jpg",
    description: "ขอนอนต่อแปป"
  },
];

export default function Home() {
  // const [data, setData] = useState<PersonData[]>([]);
  
  return (
    <div>
      <div className="flex items-center flex-col justify-center bg-gradient-to-r from-blue-500 to-purple-500 ">
        <h1 className="text-6xl font-extrabold text-cyan-50 drop-shadow-lg animate-pulse py-32">
          ยอดนักบิด 🚀🔥
        </h1>

        <Link href="/report" passHref>
          <button
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-extrabold text-2xl rounded-lg shadow-2xl hover:from-red-700 hover:to-red-900 transition duration-500 ease-in-out transform hover:scale-110 animate-pulse"
          >
            ⚡ รายงานการบิด ⚡
          </button>
        </Link>

        <h2 className="text-4xl font-bold text-white drop-shadow-md mt-8">
          🚩 Current Rank 🚩
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center  bg-gradient-to-r from-blue-500 to-purple-500">
        {mockData
          .sort((a, b) => b.score - a.score)
          .map((person, index) => (
            <Rank key={person._id} PersonData={person} rank={index + 1} />
          ))}
      </div> 
    </div>
  );
}
