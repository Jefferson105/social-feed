import { ObjectId } from 'mongodb';

export interface IUser {
    _id: string | ObjectId;
    name: string;
    photo: string;
    token: string;
}
