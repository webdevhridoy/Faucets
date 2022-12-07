import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WalletHistory = () => {
    const [openTab, setOpenTab] = useState(1);

    // As we didn't implement the backend functionality thats' why I used here fake dynamic data 
    // ETH Transaction History
    const ethTransaction = [
        {
            sl: 1,
            time: '12.30 AM',
            amount: 487,
            hash: '4s8er5s5fe57rjmxnfuewrurks'
        },
        {
            sl: 2,
            time: '10.30 AM',
            amount: 875,
            hash: 'sf7s7ers4e7r7wser'
        },
        {
            sl: 3,
            time: '11.30 AM',
            amount: 797,
            hash: 'se4s7er7'
        },
    ];

    // TestLink Transaction History
    const testTransaction = [
        {
            sl: 1,
            time: '08:30 AM',
            amount: 748,
            hash: '7s7effkeurusue4'
        },
        {
            sl: 2,
            time: '10:23 AM',
            amount: 974,
            hash: 'sfe7r7sr4fer'
        },
        {
            sl: 3,
            time: '11:10 AM',
            amount: 874,
            hash: 's4e7s8er'
        },
    ];
    return (
        <div className='bg-white px-6 pb-5'>
            <div>
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    <li>
                        <Link
                            className={
                                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                                (openTab === 1
                                    ? "text-white bg-green-700 mr-2"
                                    : "bg-gray-100 mr-2")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            ETH Transaction History
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                                (openTab === 2
                                    ? "text-white bg-green-700"
                                    : "bg-gray-100")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            TestLink Transaction History
                        </Link>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
                    <div>
                        <div className="overflow-x-auto">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <table className="table w-1/5">
                                    <thead>
                                        <tr className='text-center'>
                                            <th className='border-[1px]'>Sr</th>
                                            <th className='border-[1px]'>Time</th>
                                            <th className='border-[1px]'>Amount</th>
                                            <th className='border-[1px]'>Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ethTransaction.map((eth, index) =>
                                                <tr
                                                    key={index}
                                                    className='text-center'>
                                                    <th className='border-[1px]'>{index + 1}</th>
                                                    <td className='border-[1px]'>{eth.time}</td>
                                                    <td className='border-[1px]'>{eth.amount}</td>
                                                    <td className='border-[1px]'>{eth.hash}</td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <table className="table w-1/5">
                                    <thead>
                                        <tr className='text-center'>
                                            <th className='border-[1px]'>Sr</th>
                                            <th className='border-[1px]'>Time</th>
                                            <th className='border-[1px]'>Amount</th>
                                            <th className='border-[1px]'>Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            testTransaction.map((eth, index) =>
                                                <tr
                                                    key={index}
                                                    className='text-center'>
                                                    <th className='border-[1px]'>{index + 1}</th>
                                                    <td className='border-[1px]'>{eth.time}</td>
                                                    <td className='border-[1px]'>{eth.amount}</td>
                                                    <td className='border-[1px]'>{eth.hash}</td>
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletHistory;