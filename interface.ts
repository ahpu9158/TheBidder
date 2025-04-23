export interface PersonData {
    _id: string;
    name: string;
    score: number;
    image: string;
    description: string;
}

export interface Report {
    name: string;
    who: string;
    teller: string;
    when: string;
    description: string;
    jury: number
}

interface User {
    _id: string;
    name: string;
    username: string;
  }
  
  export interface ScoreBoardEntry {
    _id: string;
    user: User;
    score: number;
  }
  
  export interface RoomData {
    _id: string;
    name: string;
    description: string;
    host: User;
    members: User[];
    scoreBoard: ScoreBoardEntry[];
    __v: number;
  }
  