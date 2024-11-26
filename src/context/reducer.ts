import { IState } from '@/types/state';
import { rootState } from '@/context/state';

export const genericReducer = (state: object, data: object) => {
    return {
        ...state,
        ...data
    };
};

export type ActionType =
    | Partial<IState>
    | ((state: IState) => Partial<IState>)
    | 'reset';

const flexReducer = (state: IState = rootState, action: ActionType) => {
    if (typeof action === 'function') {
        const updatedFields = action(state);

        return {
            ...state,
            ...updatedFields
        };
    }

    if (typeof action === 'object' && Object?.keys(action)?.length) {
        return {
            ...state,
            ...Object(action)
        };
    }

    if (action === 'reset')
        return {
            ...rootState,
            app: {
                ...rootState.app
            }
        };

    console.warn('Dispatch must receive a function, an object or a string');

    return state;
};

export default flexReducer;
