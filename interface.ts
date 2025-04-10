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