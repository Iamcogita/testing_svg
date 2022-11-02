export interface Database {
    comments: Comment[];
}

export interface Comment {
    id: number;
    username: string;
    comment: string;
}

export interface PostComment {
    username: string;
    comment: string;
}

