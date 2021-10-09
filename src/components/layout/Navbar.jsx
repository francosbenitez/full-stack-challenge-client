import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory()
    return (
        <>
            {(history.location.pathname === "/") || (history.location.pathname === "/login") ? (
                <header className="px-10 md:px-32 flex justify-between flex-wrap items-center py-2 top-0 fixed w-screen z-10 bg-gray-50 border-b dark:border-darkergrey border-gray-200 dark:bg-black">
                    <div className="flex flex-row">
                        <h1 className="text-3xl font-bold">
                            <a href="/" className="logo">
                                Budget App
                            </a>
                        </h1>
                    </div>
                </header>
            ) : (
                <header className="px-10 md:px-32 flex justify-between flex-wrap items-center py-2 top-0 fixed w-screen z-10 bg-gray-50 border-b dark:border-darkergrey border-gray-200 dark:bg-black">
                    <div className="flex flex-row">
                        <h1 className="text-3xl font-bold">
                            <a href="/home" className="logo">
                                Budget App
                            </a>
                        </h1>
                    </div>
                    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block p-4">
                        <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                        <nav>
                            <ul className="lg:flex-1 pt-4 justify-center text-center lg:pt-0">
                                <li className="grid lg:block gap-5">
                                    <span>
                                        <a href="/#"
                                            className="text-sm font-medium lg:mx-4 lg:inline"
                                        >
                                        Title 1
                                        </a>
                                    </span>
                                    <span>
                                        <a href="/#"
                                            className="text-sm font-medium lg:mx-4 lg:inline"
                                        >
                                        Title 2
                                        </a>
                                    </span>
                                    <span>
                                        <button className="lg:mx-4 bg-primary border-2 border-primary border-opacity-100 hover:bg-background text-background hover:text-primary font-bold py-2 px-4 rounded">
                                            Sign Out
                                        </button>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                )
            }
        </>
    );
};

export default Navbar;