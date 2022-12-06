import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-[1350px] mx-auto py-2'>
            <div className="navbar p-0">
                <div className="navbar-start">
                    <Link className="text-[25px] font-semibold text-green-600">Faucets</Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end flex justify-center items-center">
                        <div className='mr-2'>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <select className="bg-transparent capitalize px-5 py-1.5 border-2 border-gray-200 mr-2">
                                        <option selected>
                                            <span></span>
                                            <span>Arbitrum Rinkeby</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>Avalanche Fuji</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>BNB Chain Testnet</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>Ethereum Rinkeby</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>Fantom Testnet</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>Harmony Testnet</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>POA Network Sokol</span>
                                        </option>
                                        <option>
                                            <span></span>
                                            <span>Polygon Mumbai</span>
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <button className="bg-transparent capitalize px-5 py-1.5 border-2 border-green-600 flex justify-center items-center">
                                        <span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path></svg>
                                        </span>
                                        <span className='ml-1 text-green-600 font-semibold'>
                                            connect wallet
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label tabIndex={2} className="btn bg-gray-200 btn-ghost btn-circle avatar">
                                <div className="rounded-full">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                                </div>
                            </label>
                            <ul tabIndex={2} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;