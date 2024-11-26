import { IState } from '@/types/state';

export const rootState: IState = {
    app: {
        isConnected: true,
        checkingAuth: true
    },
    layout: null,
    posts: [],
    user: null
};
