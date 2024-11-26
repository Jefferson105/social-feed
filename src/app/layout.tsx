import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { AppState } from '@/context';
import StyledComponentsRegistry from '@/lib/resgistry-styles';
import BaseLayout from '@/components/base-layout';

const robotoRegular = localFont({
    src: '../assets/fonts/Roboto-Regular.ttf',
    variable: '--roboto-regular',
    weight: '100 900'
});

const robotoLight = localFont({
    src: '../assets/fonts/Roboto-Thin.ttf',
    variable: '--roboto-light',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Social Media',
    description: 'Social Media App'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${robotoRegular.variable} ${robotoLight.variable}`}
            >
                <AppState>
                    <StyledComponentsRegistry>
                        <BaseLayout>{children}</BaseLayout>
                    </StyledComponentsRegistry>
                </AppState>
            </body>
        </html>
    );
}
