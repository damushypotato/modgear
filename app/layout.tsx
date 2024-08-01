import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const teko = Teko({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
    title: 'TopGear',
    description: 'Everything car mods!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={teko.className}>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
//
