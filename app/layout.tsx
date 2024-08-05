import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';

// styles for mantine components
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

// load the font for styling
const teko = Teko({ subsets: ['latin'], weight: '400' });

// define the metadata for the layout
export const metadata: Metadata = {
    title: 'ModGear',
    description: 'Everything car mods!',
};

// define the root layout component
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
