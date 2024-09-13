import Image from 'next/image';
import React from 'react';
import './quicktransfer.css'; 

const QuickTransfer = () => {
    return (
        <>
            <section className="quick-transfer-section">
                <h2 className="quick-transfer-header">Quick Transfer</h2>
                <div className="quick-transfer-container">
                    <div className="quick-transfer-progress">
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <div className="progress-circle" />
                        <Image
                            src={'/assets/slide.svg'}
                            width={24}
                            height={24}
                            alt='next-slider'
                        />
                    </div>
                    <div className="quick-transfer-input-container">
                        <label className="quick-transfer-label">Card Number</label>
                        <input
                            type="text"
                            className="quick-transfer-input dark:border-gray-700"
                            placeholder="1234 2345 7379 9090"
                        />
                    </div>
                    <div className="quick-transfer-buttons">
                        <button className="send-money-btn dark:bg-gray-800 border-none">
                            Send money
                        </button>
                        <button className="save-draft-btn dark:bg-transparent dark:border-gray-700 dark:text-white">
                            Save as Draft
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuickTransfer;
