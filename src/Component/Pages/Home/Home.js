import React from 'react';
import Notice from './Notice/Notice';
import Wallet from './Wallet/Wallet';

const Home = () => {
    return (
        <div>
            <Notice></Notice>
            <div className='bg-[#EEF2FE]'>
                <Wallet></Wallet>
            </div>
        </div>
    );
};

export default Home;