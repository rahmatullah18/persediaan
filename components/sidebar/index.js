import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import listSidebar from './ListSidebar';

export default function Sidebar() {
    return <div>
        {
            listSidebar.map((list, idx) => {
                return (
                    <div key={idx} className='flex justify-center w-full'>
                        <Link href={list.href}>
                            <a className='p-5 text-center'>
                                <FontAwesomeIcon icon={list.icon} className=' text-cool-green' size='2x' />
                                <p className='text-xs font-bold rounded-md text-cool-green'>Barang Masuk</p>
                            </a>
                        </Link>
                    </div>
                )
            })
        }

    </div>;
}
