import { RefObject } from 'react';
import { RuleSet } from 'styled-components';

export type ContentDisplay =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

export interface IContainerStyle {
    id?: string;
    bg?: string;
    display?: 'flex' | 'block' | 'inline-block' | 'none';
    dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    alignSelf?: ContentDisplay;
    position?: string;
    justify?: ContentDisplay;
    align?: ContentDisplay;
    width?: string;
    maxWidth?: string;
    minWidth?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    margin?: string;
    padding?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    border?: string;
    radius?: string;
    gap?: string;
    flex?: string;
    wrap?: string;
    opacity?: number;
    overflow?: string;
    ref?: RefObject<unknown>;
    transition?: string;
    transform?: string;
    zIndex?: number;
    cursor?: string;
    boxShadow?: string;
    hover?: RuleSet<object>;
    media?: RuleSet<object>;
    scale?: string;
}

export interface IconBase {
    color?: string;
    width?: string;
    height?: string;
    type?: string;
    singleV?: boolean;
    style?: object;
    fill?: boolean;
}

export interface ITextStyle {
    whiteSpace?: string;
    overflow?: string;
    textOverflow?: 'clip' | 'ellipsis' | 'string' | 'initial' | 'inherit';
    width?: string;
    display?: string;
    align?: string;
    verticalAlign?: string;
    lineHeight?: string;
    size?: string;
    weight?: string;
    margin?: string;
    color?: string;
    decoration?: string;
    media?: RuleSet<object>;
    variant?: string;
    textTransform?: string;
    cursor?: string;
}
