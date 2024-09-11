import React from 'react';
import './balancecard.css'; // Make sure to create this CSS file
import Image from 'next/image';

const BalanceCard = () => {
    return (
        <>
            <div className="balance-card">
                <h2 className="balance-header">Your Balance</h2>
                <div className="balance-info">
                    <h1 className="balance-amount">$128,320</h1>
                    <div className="balance-change">
                        <Image
                            src={'/assets/up.svg'}
                            width={22}
                            height={22}
                            alt='up-image'
                        />
                        <p className="change-percentage up">23.12%</p>
                    </div>
                    <div className="balance-change">
                        <Image
                            src={'/assets/down.svg'}
                            width={22}
                            height={22}
                            alt='down-image'
                            className="flipped"
                        />
                        <p className="change-percentage down">23.12%</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="balance-details">
                    <div className="detail">
                        <h2 className="detail-header">Currency</h2>
                        <h1 className="detail-value">USD/ US Dollar</h1>
                    </div>
                    <div className="detail">
                        <h2 className="detail-header">Status</h2>
                        <h1 className="detail-value">Active</h1>
                    </div>
                </div>
            </div>
            <div className="add-card-btn">
                <Image
                    src={'/assets/add.svg'}
                    width={20}
                    height={20}
                    alt='add'
                />
                <p className="add-card-text">Add Card</p>
            </div>
        </>
    );
}

export default BalanceCard;
