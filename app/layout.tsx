import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';

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
            <body className={teko.className}>{children}</body>
        </html>
    );
}
