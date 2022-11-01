interface Database {
    comments: Comment[];
}

interface Comments {
    id: number;
    name: string;
    comment: string;
}

interface PostComments {
    name: string;
    comment: string;
}

export {Database, Comments, PostComments}
