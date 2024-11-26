import styled from 'styled-components';

import { ITextStyle } from '@/types/styles';
import { getTextStyle } from '@/styles/shared';

const SubTitle = styled.h2<ITextStyle>`
    ${(props) =>
        getTextStyle({
            size: props.size || '1.2rem',
            textTransform: props.variant || 'uppercase',
            ...props
        })}
`;

export default SubTitle;
