import { IPost } from './posts';
import { IUser } from './user';

export interface IApp {
    isConnected: boolean;
    checkingAuth: boolean;
}

export interface IState {
    app: IApp;
    layout: 'sign-in' | 'sign-up' | null;
    posts: IPost[];
    user: IUser | null;
}
