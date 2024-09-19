import React from 'react';
import PaymentCard from './PaymentCard';
import BalanceCard from './BalanceCard';
import QuickTransfer from './QuickTransfer';

const Sidebar = () => {
    return (
        <>
            <section className="sticky left-0 w-full md:w-96 hidden md:block mt-20 lg:px-10 md:px-6 px-4">
                <h1 className="font-bold text-2xl mx-2 mb-2">My Card</h1>
                <div className="flex flex-col items-center justify-center gap-6">
                    <PaymentCard />
                    <BalanceCard />
                    <QuickTransfer />
                </div>
            </section>
        </>
    );
}

export default Sidebar;
