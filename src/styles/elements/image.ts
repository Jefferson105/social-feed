import Image from 'next/image';
import styled, { css } from 'styled-components';

interface IProps {
    width?: string | number;
    height?: string | number;
    radius?: string;
    fill?: boolean;
}

const getStyle = ({ width, height, radius = '0' }: IProps) => {
    return css`
        width: ${width};
        height: ${height};
        border-radius: ${radius};
        object-fit: cover;
    `;
};

const Img = styled(Image)<IProps>`
    ${(props) => getStyle(props)};
`;

export default Img;
