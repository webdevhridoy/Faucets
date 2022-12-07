import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import WalletHistory from './WalletHistory';
import { authContext } from '../../../../context/AuthProvider';

const Wallet = () => {
    const { select } = useContext(authContext);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = () => {
        console.log('Sei mama');
    };

    const onChange = (value) => {
        console.log("Captcha value:", value);
    };

    return (
        <div className='container mx-auto py-2'>
            <div className="py-12">
                <h2 className="text-[35px] font-[600] text-green-600 mb-5">Request testnet LINK</h2>
                <p className='text-gray-500 text-lg w-full md:w-[670px] leading-6'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </div>
            <div className='bg-white px-6 py-5'>
                <div className='bg-[#EEF2FE] p-3 rounded'>
                    <div className='flex justify-start items-center '>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path></g></svg>
                        </span>
                        <span className='ml-2'>
                            <p>Your wallet is connected to <span className='font-bold'>{select || "Ethereum Kovan"}</span>, so you are requesting <span className='font-bold'>{" "} {select || "Ethereum Kovan"}</span> Link/ETH.</p>
                        </span>
                    </div>
                </div>
                <div className='bg-white'>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full md:w-3/5  mt-2">
                            <label htmlFor="address"
                                className='text-base font-semibold text-green-600 mt-2'
                            >Wallet Address</label>
                            <input type='text'
                                {...register("address", { required: "Wallet Address is required" })}
                                placeholder="Wallet Address..." className="p-1 md:p-3 border-[1px] rounded border-outline w-full my-1" />
                            {errors.address && <p className='text-red-600' role="alert">{errors.address?.message}</p>}
                        </div>
                        <div className="form-control w-full  mt-2">
                            <label htmlFor="address"
                                className='text-base font-semibold text-green-600 mt-2'
                            >Request Type</label>
                            <div className='flex justify-center items-center w-full md:w-3/5 mb-3'>
                                <div className='w-full mr-2'>
                                    <input
                                        {...register("link", {
                                            required: 'Text is required',
                                        })}
                                        disabled
                                        defaultValue="20 Test Link"
                                        readOnly type="text"
                                        placeholder="Test link"
                                        className="p-1 md:p-3 rounded border-[1px] w-full my-1" />
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
                                        className="p-1 md:p-3 rounded border-[1px] w-full my-1" />
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
            <WalletHistory></WalletHistory>
        </div>

    );
};

export default Wallet;