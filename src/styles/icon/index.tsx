import React from 'react';

import ArrowLetf from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';
import Attach from './icons/attach';
import Close from './icons/close';
import Comment from './icons/comment';
import Down from './icons/down';
import Dislike from './icons/dislike';
import Empty from './icons/empty';
import Heart from './icons/heart';
import Like from './icons/like';
import Loading from './icons/loading';
import Logout from './icons/logout';
import More from './icons/more';
import User from './icons/user';

export const iconRegistry = {
    arrowLeft: ArrowLetf,
    arrowRight: ArrowRight,
    attach: Attach,
    close: Close,
    comment: Comment,
    dislike: Dislike,
    down: Down,
    empty: Empty,
    heart: Heart,
    like: Like,
    loading: Loading,
    logout: Logout,
    more: More,
    user: User
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;

interface Props {
    name: IconName;
    color?: string;
    width?: string;
    height?: string;
    type?: string;
    style?: object;
    fill?: boolean;
}

export const Icon = ({
    name,
    color,
    height,
    width,
    type,
    style,
    fill
}: Props) => {
    const SVGIcon = iconRegistry[name];

    return (
        <SVGIcon
            color={color}
            height={height}
            width={width}
            type={type}
            style={style}
            fill={fill}
        />
    );
};
