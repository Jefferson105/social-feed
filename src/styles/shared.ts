import { css } from 'styled-components';

import { IContainerStyle, ITextStyle } from '@/types/styles';

export const getGeneralStyle = ({
    width = 'auto',
    height,
    bg = 'transparent',
    display = 'flex',
    dir = 'column',
    justify = 'flex-start',
    align = 'flex-start',
    margin = '0',
    padding = '0',
    border = 'none',
    radius = '0',
    gap = '0',
    position = 'relative',
    flex,
    maxWidth,
    top,
    left,
    right,
    bottom,
    wrap = 'wrap',
    maxHeight,
    minHeight,
    overflow = 'initial',
    transition,
    minWidth,
    opacity,
    zIndex,
    cursor,
    boxShadow = 'none',
    hover,
    scale,
    transform,
    alignSelf,
    media
}: IContainerStyle) => {
    return css`
        width: ${width};
        position: ${position};
        background-color: ${bg};
        display: ${display};
        flex-direction: ${dir};
        justify-content: ${justify};
        align-items: ${align};
        margin: ${margin};
        padding: ${padding};
        border: ${border};
        border-radius: ${radius};
        gap: ${gap};
        flex-wrap: ${wrap};
        cursor: ${cursor};
        z-index: ${zIndex};
        overflow: ${overflow};
        scroll-behavior: smooth;
        transform-origin: top left;
        ${top && `top: ${top}`};
        ${left && `left: ${left}`};
        ${right && `right: ${right}`};
        ${bottom && `bottom: ${bottom}`};
        ${alignSelf && `align-self: ${alignSelf}`};
        ${opacity && `opacity: ${opacity}`};
        ${height && `height: ${height}`};
        ${minWidth && `min-width: ${minWidth}`};
        ${maxWidth && `max-width: ${maxWidth}`};
        ${minHeight && `min-height: ${minHeight};`};
        ${maxHeight && `max-height: ${maxHeight};`};
        ${boxShadow !== 'none' && `box-shadow: ${boxShadow};`}
        ${flex && `flex: ${flex};`}
        ${transform && `transform: ${transform};`}
        ${transition && `transition: ${transition};`};
        ${scale && `transform: scale(${scale})`};
        ${hover &&
        css`
            &:hover {
                ${hover};
            }
        `}
        ${media &&
        css`
            @media (max-width: 1009px) {
                ${media};
            }
        `}
    `;
};

export const getTextStyle = ({
    width = 'auto',
    display = 'block',
    align = 'left',
    verticalAlign = 'baseline',
    lineHeight = 'normal',
    size = '14px',
    weight = 'normal',
    color = '#000',
    margin = '0',
    decoration = 'none',
    cursor,
    variant,
    textTransform,
    textOverflow,
    whiteSpace,
    overflow,
    media
}: ITextStyle) => {
    return css`
        width: ${width};
        display: ${display};
        text-align: ${align};
        vertical-align: ${verticalAlign};
        line-height: ${lineHeight};
        font-size: ${size};
        font-weight: ${weight};
        color: ${color};
        margin: ${margin};
        text-decoration: ${decoration};
        ${cursor && `cursor: ${cursor}`};
        ${overflow && `overflow: ${overflow}`};
        ${whiteSpace && `white-space: ${whiteSpace}`};
        ${textOverflow && `text-overflow: ${textOverflow}`};
        ${variant && `text-variant: ${variant}`};
        ${textTransform && `text-transform: ${textTransform}`};
        ${media &&
        css`
            @media (max-width: 1009px) {
                ${media};
            }
        `}
    `;
};
