'use client';

import HeaderMain from '@/components/header';
import Modal from '@/components/modal';

import { Main, Div } from '@/styles';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderMain />
            <Main>
                <Div
                    padding="20px 10px"
                    width="100%"
                    maxWidth="1200px"
                    margin="0 auto"
                >
                    {children}
                </Div>
            </Main>
            <Modal />
        </>
    );
};

export default BaseLayout;
