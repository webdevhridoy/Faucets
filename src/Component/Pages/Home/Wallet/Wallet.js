import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

const Wallet = () => {
    const [openTab, setOpenTab] = useState(1);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = () => {
        console.log('Sei mama');
    };

    const onChange = (value) => {
        console.log("Captcha value:", value);
    };

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
        <div className='w-[1350px] mx-auto py-2'>
            <div className="py-12">
                <h2 className="text-[35px] font-[600] text-green-600 mb-5">Request testnet LINK</h2>
                <p className='text-gray-500 text-lg w-[670px] leading-6'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </div>
            <div className='bg-white px-6 py-5'>
                <div className='bg-[#EEF2FE] p-3 rounded'>
                    <div className='flex justify-start items-center '>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path></g></svg>
                        </span>
                        <span className='ml-2'>
                            <p>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                        </span>
                    </div>
                </div>
                <div className='bg-white'>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-3/5  mt-2">
                            <label htmlFor="address"
                                className='text-base font-semibold text-green-600 mt-2'
                            >Wallet Address</label>
                            <input type='text'
                                {...register("address", { required: "Wallet Address is required" })}
                                placeholder="Wallet Address..." className="input input-bordered w-full my-1" />
                            {errors.address && <p className='text-red-600' role="alert">{errors.address?.message}</p>}
                        </div>
                        <div className="form-control w-full  mt-2">
                            <label htmlFor="address"
                                className='text-base font-semibold text-green-600 mt-2'
                            >Request Type</label>
                            <div className='flex justify-center items-center w-3/5 mb-3'>
                                <div className='w-full mr-2'>
                                    <input
                                        {...register("link", {
                                            required: 'Text is required',
                                        })}
                                        disabled
                                        defaultValue="20 Test Link"
                                        readOnly type="text"
                                        placeholder="Test link"
                                        className="input input-bordered w-full my-1" />
                                </div>
                                <div className='w-full'>
                                    <input
                                        {...register("eth", {
                                            required: 'Text is required',
                                        })}
                                        disabled
                                        defaultValue="0.5 ETH"
                                        placeholder="ETH"
                                        readOnly type="text"
                                        className="input input-bordered w-full my-1" />
                                </div>
                            </div>
                            <div>
                                <ReCAPTCHA
                                    sitekey='6LcrmFwjAAAAANKkgtWd2u8wbQc_HxLufvZSvqCM'
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className=" text-white rounded btn-md  mt-5 bg-green-600 duration-300">
                                <span className='text-lg font-semibold'>Send Request</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li>
                            <Link
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-green-700"
                                        : "bg-white")
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
                                        : "bg-white")
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
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="overflow-x-auto">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <table className="table w-1/5">
                                        <thead>
                                            <tr className='text-center'>
                                                <th>Sr</th>
                                                <th>Time</th>
                                                <th>Amount</th>
                                                <th>Hash</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                ethTransaction.map((eth, index) =>
                                                    <tr
                                                        key={index}
                                                        className='text-center'>
                                                        <th>{index + 1}</th>
                                                        <td>{eth.time}</td>
                                                        <td>{eth.amount}</td>
                                                        <td>{eth.hash}</td>
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
                                                <th>Sr</th>
                                                <th>Time</th>
                                                <th>Amount</th>
                                                <th>Hash</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                testTransaction.map((eth, index) =>
                                                    <tr
                                                        key={index}
                                                        className='text-center'>
                                                        <th>{index + 1}</th>
                                                        <td>{eth.time}</td>
                                                        <td>{eth.amount}</td>
                                                        <td>{eth.hash}</td>
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
        </div>
    );
};

export default Wallet;