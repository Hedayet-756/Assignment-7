import React from 'react';
import { NavLink } from 'react-router';
import homeIcon from '../../assets/Vector.png';
import clock from '../../assets/Clock.png';
import stats from '../../assets/ChartLine.png';
import { LuSquareMenu } from 'react-icons/lu';

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-semibold mr-2 flex items-center gap-1 p-2 rounded-lg ${isActive ? "text-white bg-[#244D3F]" : "text-gray-700 hover:bg-gray-100"}`
                    }
                >
                    <img src={homeIcon} alt="Home" height="24" width="20" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                        `font-semibold mr-2 flex items-center gap-1 p-2 rounded-lg ${isActive ? "text-white bg-[#244D3F]" : "text-gray-700 hover:bg-gray-100"}`
                    }
                >
                    <img src={clock} alt="Timeline" height="24" width="20" />
                    <span>Timeline</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                        `font-semibold mr-2 flex items-center gap-1 p-2 rounded-lg ${isActive ? "text-white bg-[#244D3F]" : "text-gray-700 hover:bg-gray-100"}`
                    }
                >
                    <img src={stats} alt="Stats" height="24" width="20" />
                    <span>Stats</span>
                </NavLink>
            </li>
        </>
    );
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div>
                <div className="navbar container mx-auto">
                    <div className="navbar-start flex items-center gap-4">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <h2 className='font-bold text-xl'><LuSquareMenu /></h2>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <h2 className="font-bold text-2xl absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex items-center justify-center lg:justify-start">Keen <span className="text-[#244D3F]">Keeper</span></h2>
                    </div>

                    <div className="navbar-end gap-4 sm: hidden lg:flex">
                        <ul className='flex items-center list-none'>
                            {links}
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;