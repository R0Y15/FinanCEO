import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "FinanCEO",
    description: "An App that handles all your financial needs",
    icons: {
        icon: "/icons/logo.svg",
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </main>
    )
}

export default RootLayout