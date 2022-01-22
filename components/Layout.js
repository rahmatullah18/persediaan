import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout({ children }) {
    return <>
        <div>
            <div className='bg-gray-500'>
                <Navbar />
            </div>
            <div className='grid grid-cols-10'>
                <div className='h-screen col-span-1 bg-gray-400'>
                    <Sidebar />
                </div>
                <div className="col-span-9 bg-gray-700">
                    {children}
                </div>
            </div>
        </div>
    </>;
}
