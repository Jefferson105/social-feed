import { ObjectId } from 'mongodb';

import { IUser } from './user';

export interface IPostBase {
    _id: string;
    title: string;
    description: string;
    views: number;
    comments: number;
    image?: string;
}

export interface IPostRaw extends IPostBase {
    user: IUser[];
    likes: string[];
}

export interface IPost extends IPostBase {
    user: {
        _id: string | ObjectId;
        name: string;
        photo: string;
    };
    likes: number;
    liked: boolean;
}

export interface IComment {
    _id: string;
    user: {
        _id: string;
        name: string;
        photo: string;
    };
    post_id: string;
    description: string;
}

export interface ILikePost {
    postId: string;
    user: string;
}
