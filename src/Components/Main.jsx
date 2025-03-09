import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[90%] mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;