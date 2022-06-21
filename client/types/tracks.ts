interface InterfaceComment {
    _id: string;
    username: string;
    text: string;
}

export interface InterfaceTrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: InterfaceComment[];
}