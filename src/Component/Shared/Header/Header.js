import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Arbitrum from '../../../asset/arbitrum.79164059.png';
import Avalanche from '../../../asset/avalanche.234db155.png';
import Testnet from '../../../asset/bsc.d8c61230.png';
import Ethereum from '../../../asset/ethereum.42dac5dc.png';
import Fantom from '../../../asset/fantom.3f8c71bb.png';
import Harmony from '../../../asset/harmony.02c2e3ba.png';
import POA from '../../../asset/poa.90512ab9.png';
import Polygon from '../../../asset/polygon.97ff139c.png';
import { authContext } from '../../../context/AuthProvider';
import Modal from '../Modal/Modal';

const Header = () => {
    const { setSelect } = useContext(authContext);
    // const [openNetwork, setOpenNetwork] = useState(false);
    const { user, logOut } = useContext(authContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch((err) => console.error(err));
    };

    const networksTabs = [
        {
            id: "01",
            name: "Arbitrum Rinkeby",
            img: Arbitrum,
        },
        {
            id: "02",
            name: "Avalanche Fuji",
            img: Avalanche,
        },
        {
            id: "03",
            name: "BNB Chain Testnet",
            img: Testnet,
        },
        {
            id: "04",
            name: "Ethereum Rinkeby",
            img: Ethereum,
        },
        {
            id: "05",
            name: "Fantom Testnet",
            img: Fantom,
        },
        {
            id: "06",
            name: "Harmony Testnet",
            img: Harmony,
        },
        {
            id: "07",
            name: "POA Network Sokol",
            img: POA,
        },
        {
            id: "08",
            name: "Polygon Mumbai",
            img: Polygon,
        },
    ];

    const handleNetwork = (e) => {
        setSelect(e.target.value);
        // e.target.reset();
    };
    return (
        <div className='container mx-auto'>
            <div className="navbar p-0">
                <div className="navbar-start">
                    <Link to='/' className="text-[25px] font-semibold text-green-600">Faucets</Link>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center">
                        <div className='mr-2'>
                            <div className='flex justify-center items-center '>

                                <div>
                                    <select onChange={(e) => handleNetwork(e)} name="" id="network" className='bg-transparent capitalize px-5 py-1.5 border-2 border-green-600 flex justify-center items-center mr-2'>
                                        {
                                            networksTabs.map(networks =>
                                                <option key={networks.id} value={networks.name}>{networks.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div>
                                    <button className="bg-transparent capitalize px-5 py-1.5 border-2 border-green-600 flex justify-center items-center">
                                        <span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path></svg>
                                        </span>
                                        <label htmlFor="network-modal" className='ml-1 text-green-600 font-semibold cursor-pointer'>
                                            connect wallet
                                        </label>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                                className="btn bg-gray-200 btn-ghost btn-circle avatar">
                                <div tabIndex={0}
                                    className="rounded-full">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100  w-52">
                                    {user?.uid || user?.email ?
                                        <li onClick={handleSignOut}><Link>Logout</Link></li>
                                        :
                                        <>
                                            <li>
                                                <Link to='/login' className="justify-between">
                                                    Login
                                                </Link>
                                            </li>
                                            <li><Link to='/signup' className="justify-between">
                                                Sign up
                                            </Link></li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
};

export default Header;