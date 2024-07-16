import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const DashboardLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const role = 'User'

    return (

        <div className="relative min-h-screen md:flex">

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center bg-gray-900 text-white px-4 py-3">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`bg-teal-700 text-white w-80 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}
            >
                {/* Sidebar content */}
                <div className="flex items-center p-5 space-x-4 ">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">Leroy Jenkins</h2>

                    </div>
                </div>
                <nav>
                    {role === 'admin' && (
                        <>
                            <Link to="organizerprofile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Organizer Profile
                            </Link>
                            <Link to="addacamp" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Add a Camp
                            </Link>
                            <Link to="managecamp" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Manage Camp
                            </Link>
                            <Link to="manageregistercamp" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Manage Register Camp
                            </Link>
                        </>
                    )
                    }
                    {role === 'User' && (
                        <>
                            <Link to="/sendMoney" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Send money
                            </Link>
                            <Link to="/cashout" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Cash out
                            </Link>
                            <Link to="/cashIn" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Cash In
                            </Link>
                            <Link to="/balanceinquery" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Balance inquary
                            </Link>
                            <Link to="/TransactionHistory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                                Transaction history
                            </Link>
                        </>
                    )
                    }

                    <div className="divider text-white"></div>
                    <div className="divider text-white"></div>
                    <div className="divider text-white"></div>

                    <Link to="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">
                        Sign in
                    </Link>
                    <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-black flex items-center gap-2">

                        logout
                    </Link>

                    {/* Add more sidebar links as needed */}
                </nav>
            </div>

            {/* Outlet --> Dynamic content */}
            <div className="flex-1 md:ml-8 bg-slate-100">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


export default DashboardLayout;