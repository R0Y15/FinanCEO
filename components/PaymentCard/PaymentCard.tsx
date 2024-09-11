import Image from 'next/image';
import React from 'react';
import './PaymentCard.css'; // Make sure to create corresponding CSS for styling

const PaymentCard = () => {
    return (
        <div className="Pcard">
            {/* background */}
            <div className="chip-graph"></div>
            <div className="Pcard-details">
                <h1 className="Pcard-name">SBI</h1>

                <div className="Pcard-owner">
                    <div className="Pcard-bottom">
                        <p className="cardholder-name">OMI GUSTY</p>
                        <p className="expiration-date">06/24</p>
                    </div>
                    <p className="Pcard-number">1234 1234 1234 1234</p>
                </div>
            </div>
            <div className="Pcard-functions">
                <Image
                    src={'/assets/payPass.svg'}
                    width={20}
                    height={20}
                    alt='paythrough'
                />
                <Image
                    src={'/assets/payMethod.svg'}
                    width={50}
                    height={50}
                    alt='paythrough'
                    className='payMethod'
                />
            </div>
        </div>
    );
};

export default PaymentCard;
