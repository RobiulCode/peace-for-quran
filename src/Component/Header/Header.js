import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-slate-100 py-2 px-6 md:px-16 flex justify-between items-center shadow-md mb-1">
            <div className="">
                <img src="" alt="" />
                <Link to="/"><span className="font-bold text-2xl">Al-Quran</span></Link>
            </div>
            <FaBars className='md:hidden'/>
            <div className="space-x-2  hidden md:block">
                <Link to='/Audioquran' className='focus:ring-2 ring-offset-2 ring-blue-600 focus:bg-blue-500 px-3 py-0.5 focus:rounded-md focus:text-white'>Audio Quran</Link>
                <Link to='/aboutus' className='focus:ring-2 ring-offset-2 ring-blue-600 focus:bg-blue-500 px-3 py-0.5 focus:rounded-md focus:text-white'>About us</Link>
                <Link to='/contactus' className='focus:ring-2 ring-offset-2 ring-blue-600 focus:bg-blue-500 px-3 py-0.5 focus:rounded-md focus:text-white'>Contact us</Link>
                <Link to='/datasource' className='focus:ring-2 ring-offset-2 ring-blue-600 focus:bg-blue-500 px-3 py-0.5 focus:rounded-md focus:text-white'>Data source</Link>
            </div>
        </div>
    );
};

export default Header;