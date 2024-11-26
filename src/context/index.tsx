'use client';

import React, { useMemo, useEffect, useReducer, Dispatch } from 'react';

import { StateProvider, getState } from '@/hooks/context';

import flexReducer, { ActionType } from '@/context/reducer';
import { rootState } from '@/context/state';
import { IState } from '@/types/state';
import { checkAuth } from '@/server/auth';

export let globalState = rootState;
export let dispatch: Dispatch<ActionType>;

export const AppState = ({
    children
}: {
    children: JSX.Element | React.ReactNode;
}) => {
    const [state, dispatchReducer] = useReducer(flexReducer, rootState);

    useEffect(() => {
        (async () => {
            dispatch = dispatchReducer;
            const user = await checkAuth();

            dispatch({ user });
        })();
    }, [dispatchReducer]);

    useEffect(() => {
        globalState = state;
    }, [state]);

    return (
        <StateProvider reducer={[state, dispatchReducer]}>
            <>{children}</>
        </StateProvider>
    );
};

export const useSelector = (fn: (obj: IState) => IState): IState => {
    const [state] = getState();

    return useMemo(() => {
        return fn(state);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
};
