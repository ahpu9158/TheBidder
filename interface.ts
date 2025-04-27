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

export interface User {
    _id: string;
    name: string;
    username: string;
    role: string;
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
  

export interface BidderReport {
    _id: string;
    title: string;
    reporter: User;
    theBidder: User[];
    reason: string;
    voted: User[];
    type: string;
}

export interface SimplifiedRoomData {
    _id: string;
    name: string;
    description: string;
    host: User;
    members: string[]; // Array of user IDs
    scoreBoard: {
        user: string; // User ID
        score: number;
        _id: string;
    }[];
    __v: number;
}