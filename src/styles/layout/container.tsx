import styled from 'styled-components';

import { getGeneralStyle } from '@/styles/shared';

import { IContainerStyle } from '@/types/styles';

// TODO: don't repeat code
export const Div = styled.div<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Header = styled.header<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Section = styled.section<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Nav = styled.nav<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Footer = styled.footer<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Main = styled.main<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Aside = styled.aside<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Ul = styled.ul<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;

export const Li = styled.li<IContainerStyle>`
    ${(props) => getGeneralStyle(props)}
`;
