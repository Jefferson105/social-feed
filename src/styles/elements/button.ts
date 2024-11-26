import styled, { css } from 'styled-components';

import { COLORS } from '../colors';

interface IProps {
    margin?: string;
    radius?: string;
    width?: string;
    bg?: string;
    cursor?: string;
}

const getStyle = ({
    margin = '0',
    radius = '5px',
    width = '100%',
    bg = COLORS.blue,
    cursor = 'pointer'
}: IProps) => {
    return css`
        margin: ${margin};
        border-radius: ${radius};
        width: ${width};
        background-color: ${bg};
        cursor: ${cursor};
    `;
};

const Button = styled.button<IProps>`
    height: 40px;
    border: none;
    color: #fff;
    font-weight: bold;
    ${(props) => getStyle(props)}
`;

export default Button;
