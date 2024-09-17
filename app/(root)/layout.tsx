"use client";

import withAuth from '@/HOC/withAuth';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import { metadata } from './metadata'; // Import metadata

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </main>
    );
};

export default withAuth(RootLayout);
