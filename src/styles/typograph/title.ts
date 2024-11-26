import styled from 'styled-components';

import { ITextStyle } from '@/types/styles';
import { getTextStyle } from '@/styles/shared';

const Title = styled.h1<ITextStyle>`
    ${(props) =>
        getTextStyle({
            size: props.size || '3rem',
            weight: props.weight || 'bold',
            ...props
        })}
`;

export default Title;
