import Image from 'next/image';
import React from 'react';

const PaymentCard = () => {
    return (
        <div className="Pcard w-72 h-44 bg-gradient-to-r from-[#003F58] to-[#01AEF9] rounded-lg p-5 text-white font-sans relative flex flex-row justify-between overflow-hidden">
            <div className="chip-graph absolute top-1/3 left-0 w-full h-full bg-cover bg-no-repeat z-0 background-image: url('/assets/Lines.svg')"></div>
            <div className="Pcard-details flex flex-col justify-between h-full z-1 w-3/5">
                <h1 className="Pcard-name text-lg font-semibold">SBI</h1>
                <div className="Pcard-owner flex flex-col mt-5">
                    <div className="Pcard-bottom flex flex-row justify-between">
                        <p className="cardholder-name font-semibold text-base">OMI GUSTY</p>
                        <p className="expiration-date font-semibold text-base">06/24</p>
                    </div>
                    <p className="Pcard-number font-semibold text-base mt-1">1234 1234 1234 1234</p>
                </div>
            </div>
            <div className="Pcard-functions flex flex-col justify-between items-end z-1 w-2/5">
                <Image src={'/assets/payPass.svg'} width={20} height={20} alt='paythrough' />
                <Image src={'/assets/payMethod.svg'} width={50} height={50} alt='paythrough' className='payMethod mb-5' />
            </div>
        </div>

    );
};

export default PaymentCard;
