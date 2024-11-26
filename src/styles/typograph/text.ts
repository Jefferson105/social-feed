import styled from 'styled-components';

import { ITextStyle } from '@/types/styles';
import { getTextStyle } from '@/styles/shared';

const Text = styled.p<ITextStyle>`
    ${(props) => getTextStyle(props)}
`;

export default Text;
