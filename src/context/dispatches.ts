import { dispatch } from '@/context/index';
import { IApp } from '@/types/state';
import { IUser } from '@/types/user';

export const appDispatch = (data: Partial<IApp>) => {
    dispatch(({ app }) => {
        return {
            app: {
                ...app,
                ...data
            }
        };
    });
};

export const userDispatch = (data: IUser) => {
    dispatch(({ user }) => {
        return {
            user: {
                ...(user || {}),
                ...data
            }
        };
    });
};
