import React from 'react';
import DropDownProfile from '../dropdown/DropDownProfile';

export default function Navbar() {
    return <div className='flex items-center justify-between w-full px-2 bg-cool-green'>
        <div className='text-lg font-bold tracking-wider text-white '>
            Persediaan CV Raaf Agro
        </div>
        <div className='mt-2'>
            <DropDownProfile />
        </div>
    </div>;
}
