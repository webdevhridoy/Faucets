import React from 'react';
import meta from '../../../asset/MetaMask.551edf10.png';
import wallet from '../../../asset/WalletConnect.d0b10794.png';
import ModalDetails from './ModalDetails';

const Modal = () => {

    const walletModal = [
        {
            id: 1,
            title: 'MetaMask',
            img: meta
        },
        {
            id: 2,
            title: 'WalletConnect',
            img: wallet
        },
    ];

    return (
        <div>
            <input type="checkbox" id="network-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-none ">
                    <label
                        htmlFor="network-modal" className="absolute right-5 top-5 cursor-pointer text-lg">✕</label>
                    <div>
                        <h2 className='text-2xl font-bold'>Connect your wallet</h2>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center cursor-pointer'>
                        {
                            walletModal.map(data => <ModalDetails
                                key={data.id}
                                data={data}
                            ></ModalDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;;