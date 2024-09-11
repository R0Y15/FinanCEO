import React from 'react';
import PaymentCard from '../PaymentCard/PaymentCard';
import BalanceCard from '../BalanceCard/BalanceCard';
import QuickTransfer from '../QuickTransfer/QuickTransfer';
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
            <section className="sidebar-section">
                <h1 className="sidebar-title">My Card</h1>
                <div className="sidebar-content">
                    <PaymentCard />
                    <BalanceCard />
                    <QuickTransfer />
                </div>
            </section>
        </>
    );
}

export default Sidebar;
