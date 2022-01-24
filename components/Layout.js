import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout({ children }) {
    return <>
        <div>
            <Navbar />
            <div className='grid grid-cols-10'>
                <div className='h-screen col-span-2 bg-white'>
                    <Sidebar />
                </div>
                <div className="col-span-8 px-4 bg-gray-200 py-7">
                    {children}
                </div>
            </div>
        </div>
    </>;
}
