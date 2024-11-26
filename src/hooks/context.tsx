'use client';

import React, { createContext, useContext, Dispatch } from 'react';

import { ActionType } from '@/context/reducer';
import { IState } from '@/types/state';
import { rootState } from '@/context/state';

type reducerType = [IState, Dispatch<ActionType>];

export const StateContext = createContext<reducerType>([rootState, () => {}]);

interface IProviderProps {
    reducer: reducerType;
    children: JSX.Element | React.ReactElement;
}

export const StateProvider = ({ reducer, children }: IProviderProps) => (
    <StateContext.Provider value={reducer}>{children}</StateContext.Provider>
);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getState = (): reducerType => useContext(StateContext);
