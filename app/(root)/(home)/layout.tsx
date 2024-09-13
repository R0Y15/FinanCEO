import React, { ReactNode } from 'react'
import { Metadata } from 'next';
import { Navbar, Sidebar } from '@/components';

export const metadata: Metadata = {
    title: "FinanCEO",
    description: "An App that handles all your financial needs",
    icons: {
        icon: "/icons/logo.svg",
    }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />

            <div className="flex">
                <Sidebar />

                <section className='flex min-h-screen flex-1 flex-col pb-6 pt-28 max-md:pb-14'>
                    <div className="w-full">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeLayout